// Questão 1: Interpretação
//   O que vai ser impresso no console?
/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50 */

// O que aconteceria se retirasse os dois console.log e simplesmente invocasse 
// a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? NADA

// Questão 2 Interpretação
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
} 
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */
// Explique o que essa função faz e qual é sua utilidade:
// Está função vai servir para deixar tudo minúsculo e ver se tem o nome cenoura se tiver aparece 
// true se não tiver aparece false
/* Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i.   Eu gosto de cenoura            true
ii.  CENOURA é bom pra vista         true
iii. Cenouras crescem na terra        true */

//Questão 1 de escrita de codigo

const nome = "Bruna" 
const idade = 21 
const cidade = "Teresina"
const estudante = "Sou estudante"
 
function minhafrase () {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}. `)
}
minhafrase()

function outraFrase(nome, idade, cidade, estudante) {
return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}`
}

const frase = outraFrase('Bruna', 21, 'Teresina', 'estudante')

console.log(frase)

// Questão 2 de escrita
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
 //faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function soma(soma1, soma2) {
    return soma1 + soma2 

}

const resposta = soma (10, 8)
console.log(resposta)  
// b) Faça uma função 
 //que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

function verificarNumero(Num1, Num2) {
    return Num1 >= Num2 
}
const resposta2 = verificarNumero (10, 14)
console.log(resposta2)

// c)  Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numeroPar(numero) {
    return numero % 2 === 0
}
const resposta3 = numeroPar(8)
console.log(resposta3)

// d) Faça uma função que recebe uma mensagem (string) 
// como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
 function frase01(frase) {
    return `${frase.length}, ${frase.toUpperCase()}`
 }
// $(frase.leght) mostra a quantidade de letras
// ${frase.toUpperCase()} mostra a mensagem em letra maiuscula

 const reposta4 = frase01("Você é legal")
 console.log(reposta4)

 // Questão 03 - escrita de código 

 function somaDosNumeros(num01, num02){
     return num01 + num02
 }
 function subtracao(num01, num02) {
     return num01 - num02 

 }

 function multiplicao(num01, num02){
    return num01 * num02 
 }

 function divisao(num01, num02){
     return num01 / num02
 }

const primeiroNumero = Number(prompt('Digite o seu primeiro número'))
const segundoNumero = Number(prompt('Digite o seu segundo número'))

console.log('Soma: ', somaDosNumeros(primeiroNumero, segundoNumero))
console.log('Diferença: ', subtracao(primeiroNumero, segundoNumero))
console.log('Multiplicação: ', multiplicao(primeiroNumero, segundoNumero))
console.log('Divisão: ', divisao(primeiroNumero, segundoNumero))



   





   




   





