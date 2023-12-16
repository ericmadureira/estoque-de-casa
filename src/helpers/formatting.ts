export const currencyFormatOptions = { style: 'currency', currency: 'BRL' }
// TO-DO: rescrever e renomear os métodos pra algo como formatDatabaseDate e formatInputDate
export const serializeDate = (seconds: number) => new Date(seconds*1000)
export const deserializeDate = (dateTime: string) => {
  return {
    seconds: Math.round(new Date(dateTime).getTime()/1000),
    nanoseconds: 0,
  }
}
