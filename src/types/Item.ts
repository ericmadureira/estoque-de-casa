export interface ExpirationDate {
    seconds: number
    nanoseconds: number
}

export interface ItemCreationParams {
    name: string
    amount: number
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
    name?: string
    amount?: number
    expirationDate?: ExpirationDate
    price?: number
    category?: string
    weight?: number
    ean?: string
}
