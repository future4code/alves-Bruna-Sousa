/* 1- Interpretação o que apareceria no console: 
let a = 10
let b = 10

console.log(b)
APARECERIA "10"
b = 5
console.log(a, b)
APARECERIA "10 5" */

/* 2- Interpretação o que aparecia no console:
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
APARECERIA "10 10 10" */

/* 3- MOSTRE COMO DARIA O MELHOR NOME PARA O t E p.
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let horas = prompt("Quantas horas você trabalha por dia?")
let dia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horas/dia} por hora`) */

/*Exercicios de escrita de código: Primeiro: */

let nome 
console.log(typeof nome)
let idade 
console.log(typeof idade)
/* Apareceu undefinid porque eles não foram declarados */
nome = prompt("Nome do usúario? ") 
idade = prompt("Sua idade é? ")
 /* Tiveram que ser declarados pelo let porque eles são usados duas vezes */
console.log("Olá", nome, "sua idade é", idade, "anos.")

/*Exercicios de escrita de código: Segundo: 
Pergunta de sim ou não */
const perguntaRoupaAzul = prompt("Você está usando uma roupa azul? ")
console.log("a reposta do usuario foi", perguntaRoupaAzul)
const perguntaAguaHoje = prompt("Você bebeu água hoje? ")
console.log("a reposta do usuario foi", perguntaAguaHoje)
const perguntaComeuHoje = prompt("Você comeu hoje? ")
console.log("a reposta do usuario foi", perguntaComeuHoje )

/*Exercicios de escrita de código: Terceiro: 
Troca o valor de a e b */

let a = 10
let b = 25
let c = 0
c = a
a = b
b = c
/* Usei o c para armazenar o valor de a. */
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b )







