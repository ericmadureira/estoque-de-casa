export const currencyFormatOptions = { style: 'currency', currency: 'BRL' }
export const expirationDateFormatter = (seconds: number) => new Date(seconds*1000).toLocaleDateString('pt-BR')
