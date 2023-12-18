export const currencyFormatOptions = { style: 'currency', currency: 'BRL' }
export const formatDateFromDatabase = (seconds: number) => new Date(seconds*1000).toISOString().split('T')[0]
export const formatDateBeforeSave = (dateTime: string) => {
  return {
    seconds: Math.round(new Date(dateTime).getTime()/1000),
    nanoseconds: 0,
  }
}
