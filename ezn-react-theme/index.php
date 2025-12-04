<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div id="root"></div>

    <script>
    // Przekaż dane WordPress do React app
    window.wpSettings = {
        nonce: '<?php echo wp_create_nonce('wp_rest'); ?>',
        apiUrl: '<?php echo rest_url(); ?>',
        initialSlug: '<?php echo get_query_var('react_slug') ?: 'home'; ?>',
        siteUrl: '<?php echo site_url(); ?>',
        themeUrl: '<?php echo get_template_directory_uri(); ?>'
    };
    </script>

    <?php
    // Enqueue React build
    $react_build_path = get_template_directory_uri() . '/dist/assets/index.js';
    $react_css_path = get_template_directory_uri() . '/dist/assets/index.css';
    
    if (file_exists(get_template_directory() . '/dist/assets/index.css')) {
        wp_enqueue_style('react-app', $react_css_path, [], '1.0.0');
    }
    
    wp_enqueue_script('react-app', $react_build_path, [], '1.0.0', true);
    ?>

    <?php wp_footer(); ?>
</body>
</html>