// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
} 
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((numero) => {
        return numero % 2 === 0
      })
      return pares
    }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = retornaNumerosPares(array)
  const elevados = pares.map((n) => {
    return n ** 2
  })
  return elevados
}
 

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        return "Escaleno";
      } else if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const novoFilme = { 
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
    }
    console.log(`Venha assistir ao filme ${novoFilme.nome}, de ${novoFilme.ano}, dirigido por ${novoFilme.diretor} e estrelado por ${novoFilme.atores}.`)
   return filme
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoa1 = { 
    nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
    }
    const pessoa2 = {
        ...pessoa1,
    nome: "ANÔNIMO"
    }
return pessoa2
}    
   


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const podeEntrar = pessoas.filter((p) => {
        return p.altura >= 1.5 && p.idade > 14 && p.idade < 60;
      });
    
      return podeEntrar;
    }
    
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}