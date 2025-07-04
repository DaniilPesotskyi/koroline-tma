export interface IProductPreview {
    uuid: string,
    brand: string,
    article: string,
    category: string,
    design?: string,
    materials?: string,
    name: string,
    price_r: number,
    available: boolean,
    photo_example?: string
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

export interface IProductPhotos {
    "article": string,
    "brand": string,
    photo: {
        [key: string]: string[]
    }
}
