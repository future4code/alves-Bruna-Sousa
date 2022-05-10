// Questões de interpretação:
// 1- Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
 /* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) / vai ser false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) / vai ser false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) / vai ser true

console.log("d. ", typeof resultado) / boolean */ 

/* 2- Seu colega se aproxima de você falando que o código dele não funciona como devia.
 Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console 

 let primeiroNumero = prompt("Digite um numero!")
 let segundoNumero = prompt("Digite outro numero!")
     obs: Sera impresso a junção e não a soma. Está faltando a função parseInt
 const soma = primeiroNumero + segundoNumero
 console.log(soma)*/

 // 3- Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso
 // no console seja, de fato, a soma dos dois números.
 /* let primeiroNumero = prompt("Digite um numero!")
    primeiroNumero = parseInt(primeiroNumero) / acrescenta essa linhda de código
 let segundoNumero = prompt("Digite outro numero!")
    segundoNumero = parseInt(segundoNumero) / acrescenta essa linda de código
 
 const soma = primeiroNumero + segundoNumero
 
 console.log(soma) */
  // Exercício de escrever código
  // Questão 1
 let  suaIdade = prompt("Escreva sua idade")
    suaIdade = parseInt(suaIdade)
 let  idadeAmigo = prompt("Escreva a idade do seu melhor amigo ou amiga?")
    idadeAmigo = parseInt(idadeAmigo)

    const teste = suaIdade > idadeAmigo
    console.log("Sua idade é maior do que de seu amigo? ", teste)
    const teste2 = suaIdade - idadeAmigo
    console.log("A diferemça de idade sua para seu amigo é", teste2)
  //Questão 2
  
  let par = prompt("Escreva um número par!")
    par = parseInt(par)

    const dividir = par / 2 // não notei nenhum padrão apenas que todos são divisiveis por 2
    console.log(dividir) // aparece um número decimal em caso for um número ímpar

  // Questão 3
  /* Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas */

    let idade = prompt("Qual a sua idade em anos ?")
      idade = parseInt(idade)

      const meses = idade * 12 
      console.log("A sua idade em meses é", meses)
    
      const dias = idade * 365 
      console.log("A sua idade em dias é", dias) 

      const horas = idade * 365 * 24 
      console.log("A sua idade em horas é", horas)

 // Questão 4
/*  Faça um programa que pergunte ao usuário dois números. Em seguida, faça as
 operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
 O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações. */

let numero1 = prompt("Qual é primeiro número?")
  numero1 = parseInt(numero1)
let numero2 = prompt("Qual é o seguundo número?")
  numero2 = parseInt(numero2)

  const teste01 = numero1 > numero2 
  console.log("O primeiro numero é maior que segundo?", teste01)
  const teste02 = numero1 === numero2
  console.log("O primeiro numero é igual ao segundo?", teste02)
  const teste03 = (numero1 % numero2)  === 0 
  console.log("O primeiro número é divisivel pelo segundo?", teste03)
  const teste04 = (numero2 % numero1) === 0
  console.log("O segundo número é divisivel pelo priemiro?", teste04)

 


  
  


