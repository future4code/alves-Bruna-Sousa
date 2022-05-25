// Questão 1 -Interpretção de código-
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array) //Vai mostar os itens, os indices de cada e os arrey.
  }) */

  // Questão 2 -Interpretação de código-
  /* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  // No console : [Amanda Rangel, Lais Petra, letícia Petra]
  console.log(novoArrayB) */

  //Questão 3 -Interpretação de código- 

 /* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  // No console:  { nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" }, Por que eles não tem o apelido Chijo.
  console.log(novoArrayC) */

  // Questão 1 -Escrita de código-
//1)
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
  ]
 const nomeDosPets = pets.map((item, indice, array) => {
return item.nome })
 console.log(nomeDosPets) // Letra A: Apareceu só os nomes
 
 const novoArrayPets = pets.filter((petNovos, index, array) => {
    return petNovos.raca === "Salsicha" 
 })
 console.log(novoArrayPets) // Letra B: Mostrou só os com nome de salsicha

 const arrayDosPoodle = pets.filter((poodle, index, array) => {
     return poodle.raca === "Poodle"  
 })
 let i= 0
 const NomeDoPet = novoArrayPets.map ((nomeDono, index, array) => {
return `Você ganhou 10% de desconto para tosar o ${nomeDono.nome}`
})
 console.log(NomeDoPet) // letra C: Nome dos cachorros 

//Questão 2 - Escrita de código -
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((nomes, indice, array) => {
     return nomes.nome
 })
  console.log(nomeProdutos) // letra a: Aparece só os nomes do produtos
  
  const desconto = produtos.filter((descontos, indice, array)=> {
      descontos.preco = (descontos.preco * 95 /100).toFixed(2) 
      return produtos
  })  
  console.log(produtos) // letra b: Faz a mudança do preço com desconto 

  const bebidasDosProdutos = produtos.filter((bebida, indice, array) => {
      return bebida.categoria === "Bebidas" 
  })
  console.log(bebidasDosProdutos) // Letra c: Produtos só da categoria c

  const nomeIncluso = produtos.filter((incluir, indice, array) => {
      return incluir.nome.includes("Ypê")
  })
  console.log(nomeIncluso) // Letra d: Produtos com o nome Ypê incluso

  const fraseProduto = nomeIncluso.map((produto, indice, array) => {
      return `Compre ${produto.nome} por ${produto.preco} `
})
console.log(fraseProduto) // Letra e: Frases somente que tem o nome Ypê




