
// 1:
// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
// R: a) O constructor é um método (ou função) que faz com que seja possível e fazer a inserção de dados nas chaves correspondentes.


// b) Mensagem foi impressa 4 vezes
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getCpf(){
        return this.cpf
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getBalance(){
        return this.balance
    }
   getTransations(){
        return this.transactions
    }
}

const newInstance: UserAccount = new UserAccount("111.111.121-11", "Bruna", 22)

// console.log(newInstance)
// R: podemos ter acesso através dos métodos.

// 2:

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ){
        this.description = description,
        this.value = value,
        this.date = date
    }
    getDescription(){
        return this.description
    }
    getValues(){
        return this.value
    }
    getDate(){
        return this.date
    }
}

const instanciaUser: UserAccount = new UserAccount("11111122111", "Dec", 4)

// 3:

class Bank {
    private accounts: UserAccount[]

    constructor(
        account: UserAccount[]
    ){
        this.accounts = account
    }
    getAccounts(index: number){
        return this.accounts[index]
    }
}

const bank: Bank = new Bank([instanciaUser, newInstance])

console.log(":",bank.getAccounts(0))