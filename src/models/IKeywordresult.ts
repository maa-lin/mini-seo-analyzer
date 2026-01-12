export interface IKeywordResult {
    keyword: string;
    count: number;
    density: number;
    inH1: boolean;
    inH2: boolean;
    inH3: boolean;
    inTitle: boolean;
    inMetaDescription: boolean;
    inImageAlt: number;
    inLinks: number;
}