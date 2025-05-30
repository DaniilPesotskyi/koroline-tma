import {IProductPreview, IVariation} from "@/types/products";

export interface ICartItem extends Omit<IProductPreview, 'uuid'> {
    barcode: IVariation['barcode']
    quantity: number
    color: string;
    size: string;
}

export interface IOrderInfo {
    name: string;
    city: string;
    post: string;
    phone: string
}