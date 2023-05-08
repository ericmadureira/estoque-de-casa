export interface ExpirationDate {
    seconds: number
    nanoseconds: number
}

export interface ItemCreationParams {
    amount: number
    name: string
    expirationDate: ExpirationDate
    price: number // R$
    category: string
    weight: number // grams
    ean: string // unique identifier for products
}

export interface Item extends ItemCreationParams {
    id: string // Provided by firebase on creation
}

export interface ItemUpdateParams {
    id: string
    amount?: number
    name?: string
    expirationDate?: ExpirationDate
    price?: number
    category?: string
    weight?: number
    ean?: string
}
