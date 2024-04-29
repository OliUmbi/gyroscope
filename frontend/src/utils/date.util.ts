export const dateConvert = (date: string): Date => {
    return new Date(Date.parse(date))
}