export const checkImageAlts = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const images = Array.from(doc.querySelectorAll("img"));
  const imageCount = images.length;
  const imagesWithAlt = images.filter(
    (i) => i.hasAttribute("alt") && i.getAttribute("alt")?.trim() !== ""
  ).length;

  return { imageCount, imagesWithAlt };
};
