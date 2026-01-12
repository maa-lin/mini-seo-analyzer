import { FaCheck, FaLightbulb } from "react-icons/fa";
import type { IOverview } from "../../models/IOverview"
import "./ShowOverview.css"
import { FaXmark } from "react-icons/fa6";

type showOverviewProps = {
    overview: IOverview;
}

export const ShowOverview = (props: showOverviewProps) => {


    return <div className="overview card">
        <h2>Overview</h2>
        <ul>
            <li><strong>Word count:</strong> <span className="tag">{props.overview.totalWords} words</span><br />
                <small><FaLightbulb /> Aim for at least 300–500 words per page for better SEO.</small>
            </li>
            <li><strong>Title tag:</strong> <span className="tag">{props.overview.hasTitle ? <FaCheck className="check"/> : <FaXmark className="xmark"/>}</span><br />
                <small><FaLightbulb /> Make sure the title is unique, descriptive, and includes target keywords.</small>
            </li>
            <li><strong>Meta description:</strong> <span className="tag">{props.overview.hasMeta ? <FaCheck className="check"/> : <FaXmark className="xmark"/>}</span><br />
                <small><FaLightbulb /> Add a meta description under 160 characters that includes important keywords.</small>
            </li>
            <li><strong>Headings:</strong> <span className="tag">H1: {props.overview.totalH1 === 1 ? <FaCheck className="check"/> : props.overview.totalH1 < 1 ? <FaXmark className="xmark"/> : props.overview.totalH1}</span> <span className="tag">H2: {props.overview.totalH2 === 0 ? <FaXmark className="xmark"/> : props.overview.totalH2}</span> <span className="tag">H3: {props.overview.totalH3 === 0 ? <FaXmark className="xmark"/> : props.overview.totalH3}</span> <br />
                <small><FaLightbulb /> Use one H1 per page, then H2 and H3 to structure your content logically.</small>
            </li>
            <li><strong>Images with alt-texts:</strong> <span className="tag">{props.overview.imagesWithAlts} / {props.overview.totalImages} images</span><br />
                <small><FaLightbulb /> Add descriptive alt text to all images for accessibility and SEO.</small>
            </li>
            <li><strong>Links:</strong> <span className="tag">{props.overview.totalLinks} links</span> <br />
            <small><FaLightbulb /> Ensure most links are internal and relevant; limit excessive external links; use keywords naturally in link text where relevant.</small>
            </li>
            <li><strong>Keywords:</strong> <span className="tag">{props.overview.foundKeywords} / {props.overview.totalKeywords} detected</span><br />
                <small><FaLightbulb /> Include all target keywords naturally in headings, links, and body text.</small>
            </li>
        </ul>
    </div>
}