import { FaCheck, FaLightbulb } from "react-icons/fa";
import type { IKeywordResult } from "../../models/IKeywordresult"
import type { IOverview } from "../../models/IOverview";
import "./ShowResults.css";
import { FaXmark } from "react-icons/fa6";

type ShowResultsProps = {
    keywordResult: IKeywordResult[];
    overview: IOverview;
}

export const ShowResults = (props: ShowResultsProps) => {

    return <div className="results card">
        <h2>Results</h2>
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Count</th>
                <th>Density</th>
                <th>Title</th>
                <th>Meta description</th>
                <th>H1</th>
                <th>H2</th>
                <th>H3</th>
                <th>Image alt</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {props.keywordResult.map((r, i) => (
                <tr key={i}>
                  <td>{r.keyword}</td>
                  <td>{r.count}</td>
                  <td>{r.density.toFixed(2)} %</td>
                  <td>{r.inTitle ? <FaCheck className="check"/> : <FaXmark className="xmark"/>}</td>
                  <td>{r.inMetaDescription ? <FaCheck className="check"/> : <FaXmark className="xmark"/>}</td>
                  <td>{r.inH1 ? <FaCheck className="check"/> : <FaXmark className="xmark"/>}</td>
                  <td>{r.inH2 ? <FaCheck className="check"/> : <FaXmark className="xmark"/>}</td>
                  <td>{r.inH3 ? <FaCheck className="check"/> : <FaXmark className="xmark"/>}</td>
                  <td>{r.inImageAlt} / {props.overview.totalImages}</td>
                  <td>{r.inLinks} / {props.overview.totalLinks}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <small><FaLightbulb /> Aim for about 1–2% keyword density per keyword; avoid overstuffing.</small>
    </div>
}