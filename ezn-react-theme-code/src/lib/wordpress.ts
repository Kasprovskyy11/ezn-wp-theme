declare global {
  interface Window {
    wpSettings: {
      nonce: string;
      apiUrl: string;
      initialSlug?: string;
    };
  }
}

export interface WordPressPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  link: string;
}

export async function getPageBySlug(
  path: string
): Promise<WordPressPage | null> {
  try {
    const apiUrl = window.wpSettings?.apiUrl || "/wp-json";
    const baseUrl = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;
    const slug = path.split("/").pop() || path;
    const pageUrl = `${baseUrl}/wp/v2/pages?slug=${encodeURIComponent(slug)}&status=publish`;
    const response = await fetch(pageUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const pages: WordPressPage[] = await response.json();

    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}
