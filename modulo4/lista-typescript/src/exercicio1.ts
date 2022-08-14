const getDate = (name: string, date: string): string => {
    const resultDate = date.split('')

    const day: string = resultDate[0] + resultDate[1]

    const month: string = resultDate[3] + resultDate[4]

    const year: string = resultDate[6] + resultDate[7] + resultDate[8] + resultDate[9]
    return `Olá meu nome é ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`
}

console.log(getDate('Bruna', '20/05/2000'))