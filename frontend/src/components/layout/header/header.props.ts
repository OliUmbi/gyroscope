export interface HeaderProps {
    title: string,
    actions: HeaderAction[]
}

export interface HeaderAction {
    name: string,
    path: string
}
