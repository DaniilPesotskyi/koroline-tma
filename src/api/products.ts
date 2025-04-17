import {api} from "@/api/axiosInstance.ts";

import {IProductExtended, IProductPreview} from "@/types/products";

export const getProducts = async (offset: number, limit: number, params?: string): Promise<IProductPreview[]> => {
    const result = await api.get(`/guest/products?offset=${offset}&limit=${limit}&${params}`)
    return result.data
}

export const getProductById = async (id: string): Promise<IProductExtended> => {
    const result = await api.get(`/guest/products/${id}`)
    return result.data
}

export const getProductsCategories = async (params?: string): Promise<string[]> => {
    const result = await api.get(`/filters?${params}`)
    return result.data.categories
}