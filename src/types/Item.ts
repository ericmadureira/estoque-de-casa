export interface ItemCreationParams {
    amount: number
    name: string
    expirationDate: string // format: 2024-01-24
    // TO-DO: store price as cents
    price: number
    category: string
    weight: number // grams
    ean: string // unique identifier for products and same as bar code
}

export interface Item extends ItemCreationParams {
    id: string // Provided by firebase on creation
}

export interface ItemUpdateParams {
    id: string
    amount?: number
    name?: string
    expirationDate?: string
    price?: number
    category?: string
    weight?: number
    ean?: string
}
