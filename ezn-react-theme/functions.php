<?php
function ezn_react_theme_scripts() {
    // FONTAWESOME CDN
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
    
    // Development mode
    if (defined('WP_DEBUG') && WP_DEBUG) {
        wp_enqueue_script('vite-client', 'http://localhost:5173/@vite/client', array(), null, false);
        wp_enqueue_script('main-script', 'http://localhost:5173/src/main.tsx', array(), null, true);
        
        add_filter('script_loader_tag', function($tag, $handle) {
            if (in_array($handle, ['vite-client', 'main-script'])) {
                return str_replace(' src', ' type="module" crossorigin src', $tag);
            }
            return $tag;
        }, 10, 2);
    } 
    // Production mode
    else {
        $theme_path = get_template_directory();
        $theme_uri = get_template_directory_uri();
        
        // AUTO-DETECT FILES Z HASHAMI
        $js_files = glob($theme_path . '/dist/assets/*.js');
        $css_files = glob($theme_path . '/dist/assets/*.css');
        
        // Load JS
        if (!empty($js_files)) {
            $js_file = basename($js_files[0]);
            wp_enqueue_script('ezn-react-theme-script', $theme_uri . '/dist/assets/' . $js_file, array(), '1.0.0', true);
            error_log('Loaded JS: ' . $js_file);
        } else {
            error_log('No JS files found');
        }
        
        // Load CSS
        if (!empty($css_files)) {
            $css_file = basename($css_files[0]);
            wp_enqueue_style('ezn-react-theme-style', $theme_uri . '/dist/assets/' . $css_file, array(), '1.0.0');
            error_log('Loaded CSS: ' . $css_file);
        }
        
        // DODAJ TYPE="MODULE" DLA PRODUCTION JS
        add_filter('script_loader_tag', function($tag, $handle) {
            if ($handle === 'ezn-react-theme-script') {
                return str_replace(' src', ' type="module" crossorigin src', $tag);
            }
            return $tag;
        }, 10, 2);
    }
    
    // Pass WordPress data to React
    $script_handle = defined('WP_DEBUG') && WP_DEBUG ? 'main-script' : 'ezn-react-theme-script';
    wp_localize_script($script_handle, 'wpSettings', array(
        'apiUrl' => rest_url(),
        'nonce' => wp_create_nonce('wp_rest'),
        'themeUrl' => get_template_directory_uri(),
        'siteUrl' => home_url()
    ));
}
add_action('wp_enqueue_scripts', 'ezn_react_theme_scripts');

// REWRITE RULES DLA WSZYSTKICH ŚCIEŻEK
function ezn_react_theme_rewrite_rules() {
    // USUŃ WSZYSTKIE POPRZEDNIE RULES I DODAJ JEDNĄ UNIWERSALNĄ
    
    // Przechwytuj WSZYSTKIE ścieżki (pojedyncze i zagnieżdżone)
    add_rewrite_rule(
        '^(.+)/?$',
        'index.php?pagename=react-catch-all&react_path=$matches[1]',
        'top'
    );
    
    // Przechwytuj również root (strona główna)
    add_rewrite_rule(
        '^$',
        'index.php?pagename=react-catch-all&react_path=home',
        'top'
    );
}
add_action('init', 'ezn_react_theme_rewrite_rules');

// DODAJ CUSTOM QUERY VARS
add_filter('query_vars', function($vars) {
    $vars[] = 'react_path';
    return $vars;
});

// PRZECHWYĆ WSZYSTKIE REQUESTY DLA REACT
add_action('template_redirect', function() {
    $is_react_app = get_query_var('pagename') === 'react-catch-all';
    
    if ($is_react_app && !is_admin()) {
        $react_path = get_query_var('react_path') ?: 'home';
        
        // DLA DEBUGU - wypisz co przekazujemy
        error_log("🔄 WordPress przekazuje: " . $react_path);
        
        // Przekaż CAŁĄ ścieżkę do Reacta
        ?>
        <script>
        window.wpSettings = window.wpSettings || {};
        window.wpSettings.initialPath = '<?php echo $react_path; ?>';
        window.wpSettings.initialSlug = '<?php echo $react_path; ?>'; // Przekaż całą ścieżkę
        console.log('🔄 WordPress -> React:', {
            fullPath: '<?php echo $react_path; ?>',
            url: '<?php echo $_SERVER['REQUEST_URI']; ?>'
        });
        </script>
        <?php
        include get_template_directory() . '/index.php';
        exit;
    }
});

// Theme support
function ezn_react_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'ezn_react_theme_setup');

// Flush rewrite rules on theme activation
function ezn_react_theme_activation() {
    ezn_react_theme_rewrite_rules();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'ezn_react_theme_activation');

// API LIMIT FIXES
function remove_api_limit() {
    add_filter('rest_endpoints', function($endpoints) {
        foreach ($endpoints as &$endpoint) {
            if (isset($endpoint['/wp/v2/pages'])) {
                $endpoint['/wp/v2/pages'][0]['args']['per_page']['maximum'] = 1000;
            }
        }
        return $endpoints;
    });
}
add_action('rest_api_init', 'remove_api_limit', 12);

function increase_pages_per_page() {
    add_filter('rest_page_collection_params', function($query_params) {
        $query_params['per_page']['maximum'] = 100;
        return $query_params;
    }, 10, 1);
}
add_action('rest_api_init', 'increase_pages_per_page');