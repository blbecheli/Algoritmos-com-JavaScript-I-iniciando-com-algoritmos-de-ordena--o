const livros = require('./2listaLivros');
const menorValor = require('./1menorValor')


//for utilizado para ordenar os valores dos livros dados na array precoLivros no arquivo 2listaLivros
for (let atual = 0; atual<livros.length-1; atual ++){ //length -1 pois a última posição ja vai ser o mais caro
let menor = menorValor(livros, atual) //salva o indice. Essa constante vai chamar a função menorValor (1menorValor), que vai retornar o menor valor entre os livros. Foram dados os parametros livros e atual (0)
let livroAtual = livros[atual] //salva a informação do indice. Essa let vai salvar a const livros (que importou o objeto de 2listaLivros) na posição inicial que é 0. A cada vez que roda o loop ele vai sendo adicionado mais 1
let livroMenorPreco = livros[menor] //salva a informação do preço do menor livro. Essa let vai receber o valor do menor preço de livro armazenadi na let menor (que por sua vez recebeu a posição do objeto que foi importado)

livros [atual] = livroMenorPreco; //Livros [atual] que indica uma posição e seu valor vai receber agora o valor da let LivroMenorPreco
livros [menor] = livroAtual //Livros [menor] que indica uma posição e seu valor vai receber agora o valor da let livroAtual
}

console.log(livros);