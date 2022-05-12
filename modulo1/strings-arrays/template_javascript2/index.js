// interpretação 
// Questão 1
/* let array 
console.log('a. ', array) // undefenid

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  // 11 

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)  */

// Questão 2

/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for:
 "Subi num ônibus em Marrocos"?  SUBI NUM ONIBUS EM MIRROCOS */

// Questões de escrita de código 
/* 1-Faça um programa que pergunte ao usuário seu nome e seu e-mail.
 Em seguida, Imprima no console a seguinte mensagem:
 O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o),
  nomeDoUsuario! */

  let usuario = prompt ("Qual o seu nome?")
  let emailDoUsuario = prompt ("Qual é o seu e-mail?")
  const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(o),
  ${usuario}!`
  console.log(frase)


 /* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
  armazenado em uma variável. Em seguida, siga os passos:
  a) Imprima no console o array completo
  b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
   seguida por cada uma das comidas, **uma embaixo da outra**. 
  c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
  Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista */
  let arrayComida = [ "macarrão", "lasanha", "chocolate", "feijão tropeiro","purê" ]
  console.log(arrayComida)

console.log(`Minhas comidas favoritas são: 
${arrayComida[0]}
${arrayComida[1]}
${arrayComida[2]}   
${arrayComida[3]}
${arrayComida[4]}`)
// O acento não precisa usar o /n.

const pergunte = prompt("Qual é sua comida favorita")
arrayComida[1] = pergunte
console.log (arrayComida)

let listaDeTarefas = []

let tarefa0 = prompt("Qual a sua primeira tarefa? ")
let tarefa1 = prompt("Qual a segunda tarefa? ")
let tarefa2 = prompt("Qual a terceira tarefa? ")
listaDeTarefas.push (tarefa0, tarefa1, tarefa2)
console.log ("Minhas tarefas são: " + listaDeTarefas)

let excluir = prompt("Qual das tarefas você já realizou 1, 2 ou 3 ?") -1
excluir = parseInt(excluir)
listaDeTarefas.splice(excluir)
console.log (listaDeTarefas)

  
