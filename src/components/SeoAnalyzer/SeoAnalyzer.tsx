import { useState } from "react";
import type { IKeywordResult } from "../../models/IKeywordresult";
import { ShowResults } from "../ShowResults/ShowResults";
import { checkKeywords } from "../../utils/checkKeywords";
import { checkImageAlts } from "../../utils/checkImageAlts";
import { countLinks } from "../../utils/countLinks";
import { countWords } from "../../utils/countWords";
import { ShowOverview } from "../ShowOverview/ShowOverview";
import type { IOverview } from "../../models/IOverview";
import { checkTitleAndMeta } from "../../utils/checkTitleAndMeta";
import { countHeadings } from "../../utils/countHeadings";
import "./SeoAnalyzer.css";

export const SeoAnalyzer = () => {
  const [html, setHtml] = useState<string>("");
  const [keywords, setKeywords] = useState<string>("");
  const [keywordResults, setKeywordResults] = useState<IKeywordResult[]>([]);
  const [overview, setOverview] = useState<IOverview>({ 
    totalWords: 0, 
    totalImages: 0, 
    imagesWithAlts: 0, 
    totalLinks: 0, 
    totalKeywords: 0, 
    foundKeywords: 0, 
    hasTitle: false, 
    hasMeta: false,
    totalH1: 0,
    totalH2: 0,
    totalH3: 0  
  });

  const handleAnalyze = () => {
    const results = checkKeywords(html, keywords);
    const foundKeywords = results.filter((r) => r.count > 0).length;
    const totalKeywords = results.length;
    const imageAlts = checkImageAlts(html);
    const links = countLinks(html);
    const words = countWords(html);
    const titleAndMeta = checkTitleAndMeta(html);
    const headings = countHeadings(html);
    
    setKeywordResults(results);
    setOverview({ 
      totalWords: words, 
      totalImages: imageAlts.imageCount, 
      imagesWithAlts: imageAlts.imagesWithAlt, 
      totalLinks: links, 
      totalKeywords, 
      foundKeywords, 
      hasTitle: titleAndMeta.hasTitle, 
      hasMeta: titleAndMeta.hasMeta,
      totalH1: headings.h1Count,
      totalH2: headings.h2Count,
      totalH3: headings.h3Count
    });
  };

  return (
    <div className="analyzer">
      <form className="card" onSubmit={(e) => { e.preventDefault() }}>
        <textarea
          rows={10}
          cols={80}
          name="html"
          placeholder="Paste HTML here..."
          required
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />

        <input
          type="text"
          name="keywords"
          placeholder="Enter keywords, comma separated"
          required
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />

        <button onClick={handleAnalyze}>Analyze</button>
      </form>

      { keywordResults.length > 0 && <ShowOverview overview={overview} /> }
      { keywordResults.length > 0 && <ShowResults keywordResult={keywordResults} overview={overview} />}
    </div>
  );
};
