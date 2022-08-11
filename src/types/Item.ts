interface ExpirationDate {
    seconds: number
    nanoseconds: number
}

export interface Item {
    id: string
    name: string
    amount: number
    expirationDate: ExpirationDate
    price: number // R$
    category: string
    weight: number // grams
}
