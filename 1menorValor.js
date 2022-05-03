const livros = require('./2listaLivros'); //require é utilizado para importar código de um outro arquivo. No caso o objeto criado em outro aquivo (2listalivros) será importado para a constante livros

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) { //for: let atual é uma constante criada para comparar o indice do preço dos arrProdutos. A condição é que a let atual seja menor do que o tamanho da array arrProdutos. A cada vez que iterar eu somo um na let atual
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) { //Se o preço dos arrProdutos, na posição atual (a ser dada) for menor que o preço dos arrProdutos na posição mais barato (a ser dada) for menor eu substituo o indice do mais barato pelo indice atual
      maisBarato = atual
    }
  }
  return maisBarato
}

module.exports = menorValor;

