export const countHeadings = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const h1Count = Array.from(doc.querySelectorAll("h1"))
    .filter(h => h.textContent?.trim() !== "").length;

  const h2Count = Array.from(doc.querySelectorAll("h2"))
    .filter(h => h.textContent?.trim() !== "").length;

  const h3Count = Array.from(doc.querySelectorAll("h3"))
    .filter(h => h.textContent?.trim() !== "").length;

  return { h1Count, h2Count, h3Count };
};