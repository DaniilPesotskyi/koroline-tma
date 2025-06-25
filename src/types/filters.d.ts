export interface IFiltersType {
    articles: IArticleFilterType[],
    brands: string[],
    categories: string[]
    colors: string[],
    designs: IDesignType[],
    sizes: string[],
    max_price: number,
    min_price: number,
}

export interface IArticleFilterType {
    article: string;
    brand: string;
    category: string;
}

export interface IDesignType {
    category: string,
    designs: string[],
    materials: string[],
}