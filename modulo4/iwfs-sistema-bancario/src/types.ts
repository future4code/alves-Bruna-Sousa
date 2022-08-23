export type Transações = {
    valor: number,
    data: Date,
    descrição: string
}

export type Account  ={
    nome: string,
    CPF: string,
    dataDeNascimento: Date,
    saldo: number,
    extrato: Array<Transações>

     
}