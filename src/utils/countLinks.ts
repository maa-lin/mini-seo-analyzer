export const countLinks = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const links = Array.from(doc.querySelectorAll("a"));
  const linkCount = links.length;

  return linkCount;
};