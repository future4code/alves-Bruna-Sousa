
              // Tentativa 1 
/* console.log("Boas vindas ao jogo de Blackjack!")

let pergunta = prompt("Quer iniciar uma nova rodada?").toUpperCase()
function resposta () {
   if (pergunta === "SIM"){
      console.log("Vamos iniciar uma rodada!")
   function respostaDoUsuario () {
      console.log("Usuário");
      const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
      const segundaCarta = comprarCarta();
    console.log(`Sua primeira carta é ${carta.texto} com o valor ${carta.valor} `)
    console.log(`Sua segunda carta é ${segundaCarta.texto} com o valor ${segundaCarta.valor}`)
    const receberValorUsuario = carta.valor + segundaCarta.valor 
    console.log(`Pontuação total do usuário é ${receberValorUsuario}`)
       return receberValorUsuario
      }
   function respostaDoComputador () {
      console.log("Computador")
      const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros   
      const segundaCarta = comprarCarta();
    console.log(`Primeira carta é ${carta.texto} com o valor ${carta.valor}`) 
    console.log(`Segunda carta é ${segundaCarta.texto} com o valor ${segundaCarta.valor}`)
    const receberValorComputador = carta.valor + segundaCarta.valor 
    console.log(`Pontuação total do computador é ${receberValorComputador}`)
    return receberValorComputador
      } function verificaQuemGanhou () {} // Não deu certo por que eu não sei chamar algo de uma função para outra!!!!
    } else {
      console.log("O jogo acabou")
   } 
   respostaDoUsuario()
   respostaDoComputador()
   soma()
}
resposta() */

//  Tentativa 2
console.log("Boas vindas ao jogo de Blackjack!")

let pergunta = prompt("Quer iniciar uma nova rodada?").toUpperCase()
const nome = prompt("Qual é o seu primeiro nome?")
if (pergunta === "SIM"){
   console.log("Vamos inciar uma rodada!")
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   console.log("Usuário")
   console.log(`${nome} sua carta é ${cartaUsuario1.texto} e a pontuação: ${cartaUsuario1.valor}`)
   console.log(`Sua segunda carta é ${cartaUsuario2.texto} e a pontuação: ${cartaUsuario2.valor}`)
   const somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   console.log(`Sua pontuação total é ${somaUsuario}`)
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   console.log(`A carta do computador é ${cartaComputador1.texto} e a pontuação: ${cartaComputador1.valor}`)
   console.log(`A segunda carta do computador é ${cartaComputador2.texto} e a pontuação: ${cartaComputador2.valor}`)
   const somaComputador = cartaComputador1.valor + cartaComputador2.valor
   console.log(`A pontuação do computador total é ${somaComputador}`)
if (somaComputador === somaUsuario){
   console.log("Empate!")
} if (somaComputador < somaUsuario){
   console.log(`Parabéns ${nome} você ganhou`)
} if (somaComputador > somaUsuario){
   console.log(`Que pena ${nome}, você perdeu`)
}
   
} 
else { console.log("O jogo acabou!")
}



/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */