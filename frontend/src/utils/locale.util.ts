
export const locale = (date: Date): string => {
    return date.toLocaleString("de-CH", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    })
}

export const localeDate = (date: Date): string => {
    return date.toLocaleDateString("de-CH", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    })
}

export const localeTime = (date: Date): string => {
    return date.toLocaleTimeString("de-CH", {
        hour: "2-digit",
        minute: "2-digit"
    })
}

