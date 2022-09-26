import { checkIfEven, getLength, toNumber, toSplit, toUpperCase, users } from "./exercicios/exercicio0-6"


describe("Testando a checkIfEven", () => {
    test("A entrada 2 deve retornar true", () => {
        const input = 2
        const output = checkIfEven(input)

        expect(output).toBe(true)
    })
    
    test("A entrada bananinha deve retorna BANANINHA", ()=>{
        const input = "bananinha"
        const output = toUpperCase(input)

        expect(output).toBe("BANANINHA")
    })

    test("A entrada oi deve retorna um array com as letras separadas", ()=>{
        const input = "oi"
        const output = toSplit(input)

        expect(output).toEqual(['o','i'])

    })

    test("A string 50 deve retornar um número 50", ()=>{
        const input="50"
        const output = toNumber(input)

        expect(output).toBe(50)
    })

    test("A entrada deve ser vida e a saida deve ser o número 4",()=>{
        const input="vida"
        const output = getLength(input)

        expect(output).toBe(4)
    })

    test("Deve retornar true para a busca de Astrodev", () => {
        const input = {
            name: "Astrodev"
        }
       // const output = users(input)
        
        expect(output).toBe(true)
    })

    })


})
