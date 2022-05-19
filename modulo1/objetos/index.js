// 1 questão - interpretação -

/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])  // Vai aparecer: Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Vai aparecer: Virginia Cavendish  
console.log(filme.transmissoesHoje[2]) // Vai aparecer: canal: "Globo", horario: "14" */ 

// 2 questão - inteerpretação -

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"} // Os três pontos copia 

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // Vai aparecer: {nome: Juca, idade: 3, raca: S'RD'}
console.log(gato) //Vai aparecer: {nome: Juba, idade: 3, raca: S'RD'}
console.log(tartaruga) // Vai aparecer: {nome: Jubo, idade: 3, raca: S'RD'}  */

// 3 questão - interpretação -

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // Vai aparecer: false  
console.log(minhaFuncao(pessoa, "altura")) // Vau aparecer: undefined // Ele não foi declarado. */

// 1 questão -escrita de código - 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá
 // exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma
  //mensagem no modelo abaixo: 
// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas 
 // com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como 
 // argumento o novo objeto

 // a)
  const pessoa = {
      nome: "Matheus",
      apelidos: ["Amor", " Neném", " Gatinho"]
  }
  
console.log(`Meu nome é ${pessoa.nome} e meus apelidos são: ${pessoa.apelidos}`)
// b 
const novosApelidos ={
    ...pessoa, 
    apelidos: ["teteus"," Gêmeo", " Bastião"]  
} 
console.log(`Meu nome é ${pessoa.nome} e meus apelidos são: ${novosApelidos.apelidos}`)

//Quetão 2 -escrita de código- 
const individuo = {
	nomeDoIndividuo: "Bruna", 
  idade: 21, 
	profissao: "estudante"
}
array = [individuo.nomeDoIndividuo, individuo.nomeDoIndividuo.length, individuo.idade, individuo.profissao, individuo.profissao.length]
console.log(array)

const outroIndividuo = {
    nomeDaPessoa: "Ana paula",
    idade: 24,
    profissao: "vendedora"
}
arrayOutro = [outroIndividuo.nomeDaPessoa, outroIndividuo.nomeDaPessoa.length, outroIndividuo.idade, outroIndividuo.profissao, outroIndividuo.profissao.length]
console.log(arrayOutro)




