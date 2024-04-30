export interface SelectProps {
    value: any,
    setValue: (value: any) => void,
    options: SelectOption[],
    label: string,
    required: boolean,
    message: string
}

export interface SelectOption {
    name: string,
    value: any
}
