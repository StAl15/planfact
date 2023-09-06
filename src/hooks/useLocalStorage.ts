export const useSetLocalStorage = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

export const useGetLocalStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
}