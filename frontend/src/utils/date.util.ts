export const dateConvert = (date: string): Date => {
    return new Date(Date.parse(date))
}

export const dateValid = (input: string): boolean => {
    let regex = /^\d{2}\.\d{2}\.\d{4},\s\d{2}:\d{2}$/;

    return regex.test(input)
}

export const dateParse = (input: string): Date => {
    let regex = /^(\d{2})\.(\d{2})\.(\d{4}),\s(\d{2}):(\d{2})$/;

    return new Date(input.replace(regex, '$3-$2-$1T$4:$5'))
}
