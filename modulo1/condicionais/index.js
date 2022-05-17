// Questão 1 Interpretaçao 

/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {  // Está servindo para ver se o número tem o resto = 0
  console.log("Passou no teste.") // Vai passar números pares
} else {
  console.log("Não passou no teste.") // Não vai passar números impar 
} */

// Questão 2 Interpretação 

 /* let fruta = prompt("Escolha uma fruta")
let preco   // Verifica o preço das frutas indicadas e retorna uma mensagem
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */
// Se for escolhida Maçã ("O preço da fruta maçã é R$ 2.25")
// Se retirarmos o back de perâ vai continuar com a mensagem ("o preço da fruta Perâ é R$ 5.5")

// Questão 3 - interpretação -

/* const numero = Number(prompt("Digite o primeiro número.")) // Está recebendo um número do usuário 
 if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) */
// Se o usuário digitar 10 vai aparecer "Esse número passou no teste"
// Se a pessoa digitas -10 vai aparecer uma mensagem no console que está indefinido.
// Vai ter erro no segundo console.

// Questão 1 -Escrita de código-

const idade = Number(prompt("Qual sua idade"))

function idadeMinima () {
  if (idade >= 18) { // Se você tem 18 anos ou mais você pode dirigir.
    console.log("Você pode dirigir")
  } else {     // Se você tem menos não pode dirigir
    console.log("Você não pode dirigir")
  }
}
idadeMinima() 


// questão 2 - escrita de código - 

const turnoFaculdade = prompt("Escreva M para (matutino) ou V para (Vespertino) ou N para (Noturno):").toUpperCase()
function faculdade (turnoAluno) {
  if (turnoAluno === "M"){
    console.log("Bom dia!")
  } else if (turnoAluno === "V"){
    console.log("Boa Tarde!")
  } else if (turnoAluno === "N"){
    console.log("Boa noite!")
  }else{
    console.log("Não foi escolhido")
  }

}
faculdade(turnoFaculdade) 



// Questão 3 - escrita de código -

 const turno = prompt("Escreva M para (matutino) ou V para (Vespertino) ou N para (Noturno):").toUpperCase()

switch (turno) {
  case "M":
  console.log("Bom dia!")
  break
  case "V":
  console.log("Boa tarde!")
  break
  case "N":
    console.log("Boa noite!")
  default:
    console.log("Não é uma das escolhas")
 } 

 // Questão 4 -escrita de código-

 const filme = prompt("Qual é o filme?").toUpperCase()
 const valor = Number(prompt("Qual é o valor"))

 
 function assistirFilme(nomeFilme, valorFilme){
   if((nomeFilme === "FANTASIA") && (valorFilme <= 15)){
    console.log("Bom filme!")
   } else {
     console.log("Escolha outro filme!")
   }
 }
assistirFilme(filme, valor)





