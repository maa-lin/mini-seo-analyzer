import type { IKeywordResult } from "../models/IKeywordresult";
import { countWords } from "./countWords";

export const checkKeywords = (
  html: string,
  keywords: string
): IKeywordResult[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const elements = doc.querySelectorAll(
    "h1,h2,h3,h4,h5,h6,p,li,strong,b,i,em,span,a"
  );
  let allText = "";

  elements.forEach((e) => {
    allText += " " + e.textContent;
  });

  const title = doc.querySelector("title")?.textContent ?? "";
  const metaDescription = doc.querySelector(`meta[name="description"]`)?.getAttribute("content") ?? "";

  const h1 = Array.from(doc.querySelectorAll("h1"));
  const h2 = Array.from(doc.querySelectorAll("h2"));
  const h3 = Array.from(doc.querySelectorAll("h3"));

  const links = Array.from(doc.querySelectorAll("a"));
  const images = Array.from(doc.querySelectorAll("img"));

  const keywordList = keywords.split(",").map((k) => k.trim()).filter((k) => k);

  const result: IKeywordResult[] = keywordList.map((keyword) => {
    const lowerKeyword = keyword.toLowerCase();

    const count = allText.toLowerCase().split(lowerKeyword).length - 1;
    const wordCount = countWords(html);
    let density = 0;

    if (wordCount !== 0) {
      density = (count / wordCount) * 100;
    }

    let inTitle = false;
    let inMetaDescription = false;

    if (title) {
      inTitle = title?.toLowerCase().includes(lowerKeyword);
    }

    if (metaDescription) {
      inMetaDescription = metaDescription?.toLowerCase().includes(lowerKeyword);
    }

    const inH1 = h1.some((e) => e.textContent.toLocaleLowerCase().includes(lowerKeyword));
    const inH2 = h2.some((e) => e.textContent.toLocaleLowerCase().includes(lowerKeyword));
    const inH3 = h3.some((e) => e.textContent.toLocaleLowerCase().includes(lowerKeyword));

    let inImageAlt = 0;
    let inLinks = 0;

    links.forEach((link) => {
      const aTag = link.textContent.toLowerCase() ?? "";

      if (aTag.includes(lowerKeyword)) inLinks++;
    })

    images.forEach((img) => {
        const alt = img.getAttribute("alt")?.toLowerCase() ?? "";

        if (alt.includes(lowerKeyword)) inImageAlt++;  
    });

    return {
      keyword,
      count,
      density,
      inH1,
      inH2,
      inH3,
      inTitle,
      inMetaDescription,
      inImageAlt,
      inLinks
    };
  });

  return result;
};
