export interface IProductPreview {
    uuid: string,
    brand: string,
    article: string,
    category: string,
    design: string,
    materials: string,
    name: string,
    price: number,
    available: boolean,
}

export interface IProductExtended extends IProductPreview {
    variations: IVariation[]
}

export interface IVariation {
    uuid: string,
    barcode: number,
    color_group: string,
    color: string,
    size: string,
    available: boolean,
}
