export const checkTitleAndMeta = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const title = doc.querySelector("title")?.textContent ?? "";
    const metaDescription = doc.querySelector(`meta[name="description"]`)?.getAttribute("content") ?? "";

    let hasTitle = false;
    let hasMeta = false;

    if (title) {
        hasTitle = true;    
    }

    if (metaDescription) {
        hasMeta = true;
    }

    return { hasTitle, hasMeta };
}