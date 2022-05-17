// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Qual é altura do triangulo?"))
  const largura = Number(prompt("Qual é largura do triangulo?"))
  const areaTriangulo = altura * largura
  console.log(areaTriangulo)

}


// EXERCÍCIO 02
function imprimeIdade(num1, num2) {
  // implemente sua lógica aqui
  const atual = Number(prompt("Quando você nasceu?"))
  const nasceu = Number(prompt("Qual seu ano atual? "))
  const minhaIdade = atual - nasceu 
  console.log(minhaIdade)
  
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}
const seuPeso = Number(prompt("Qual é o seu peso?"))
const suaAltura = Number(prompt("Qual é sua altura"))
console.log(calculaIMC(seuPeso, suaAltura))

// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
  const meuNome = prompt("Qual é o seu nome ?")
  const minhaIdade = prompt("Qual é sua idade")
  const email = prompt("Qual é seu e-mail?")
  let frase = `Meu nome é ${meuNome}, tenho ${minhaIdade} anos, e o meu email é ${email}.`
  console.log(frase)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt("Primeira cor?")
  const segundaCor = prompt("Segunda cor?")
  const terceiraCor = prompt("Terceira cor?")
  arrayCor = [primeiraCor, segundaCor, terceiraCor]
  console.log(arrayCor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return `${string.toUpperCase()}`

}
console.log(retornaStringEmMaiuscula('Missão quase impossivel'))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}
const seuCusto = Number(prompt("Qual é o seu custo?"))
const seuIngresso = Number(prompt("Qual é o valor do ingresso"))
console.log(calculaIngressosEspetaculo(seuCusto, seuIngresso))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}
const palavra1 = prompt("Escreva uma palavra")
const palavra2 = prompt("Escreva outra palavra")
console.log(checaStringsMesmoTamanho(palavra1, palavra2))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}
const amigos = [amigo1, amigo2, amigo3]
console.log(retornaPrimeiroElemento(array))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
   
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}