export const checkIfEven = (n: number): boolean => {
    if (n % 2 == 0) {
        return true
    }

    return false
}

export const toUpperCase = (str: string): string => {
	return str.toUpperCase()
}

export const toSplit = (str: string): string[] => {
	return str.split("")
}

export const toNumber = (str: string): number => {
	return Number(str)
}

export const getLength = (str: string): number => {
	return str.length
}

interface IUser {
    id: string,
    name: string,
    age: number
}

export const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]