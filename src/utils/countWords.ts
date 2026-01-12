export const countWords = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const scriptsAndStyles = doc.querySelectorAll("script, style");
    scriptsAndStyles.forEach(s => s.remove());

    const text = doc.body?.textContent || "";

    const words = text.trim().split(/\s+/);

    return text.trim() === "" ? 0 : words.length;
}