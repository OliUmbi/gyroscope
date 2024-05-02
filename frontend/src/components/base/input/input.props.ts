export interface InputProps {
    value: string | null,
    setValue: (value: string) => void,
    type: "text" | "password" | "email"
    label: string,
    required: boolean,
    placeholder: string,
    message: string,
    rows?: number
}
