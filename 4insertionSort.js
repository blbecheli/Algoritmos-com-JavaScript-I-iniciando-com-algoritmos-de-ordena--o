const livros = require ('./2listaLivros')

//ordenar por preço
function insertionSort(lista){ //foi dado como parametro lista, que vai ser substituido pelo parametro assim que a função for chamada

for (let atual = 0; atual <lista.length; atual ++){
    let analise = atual;
    while (analise >0 && lista[analise].preco < lista [analise-1].preco ) { //While (enquanto) é um tipo de if, ou seja, enquanto uma condição for verdadeira ele continua iterando. Foram passadas duas condições e a primeira se refere que o analise (que é igual a atual e se refere ao indice) deve ser maior que 0, pois não há indice negativo
        let itemAnalise = lista[analise] //salva a informação do indice. Essa let vai salvar a const livros (que importou o objeto de 2listaLivros) na posição inicial que é 0. A cada vez que roda o loop ele vai sendo adicionado mais 1
        let itemAnterior = lista[analise-1] //salva a informação do preço do menor livro. Essa let vai receber o valor do menor preço de livro armazenadi na let menor (que por sua vez recebeu a posição do objeto que foi importado)
        
        lista [analise] = itemAnterior; //Livros [atual] que indica uma posição e seu valor vai receber agora o valor da let LivroMenorPreco
        lista [analise-1] = itemAnalise //Livros [menor] que indica uma posição e seu valor vai receber agora o valor da let livroAtual   
        analise-- //-- indica quando a condição não for mais verdadeira, assim o while para de iterar
    }
}
    console.log("Relação de livros por ordem de preço: ");
    console.log(lista);
}

insertionSort(livros)

//ordenar por ordem alfabética. A função é a mesma o que muda é que na lista eu estou usando a chave titulo como referencia
function insertionSortNome(lista){ //foi dado como parametro lista, que vai ser substituido pelo parametro assim que a função for chamada

    for (let atual = 0; atual <lista.length; atual ++){
        let analise = atual;
        while (analise >0 && lista[analise].titulo < lista [analise-1].titulo ) { //While (enquanto) é um tipo de if, ou seja, enquanto uma condição for verdadeira ele continua iterando. Foram passadas duas condições e a primeira se refere que o analise (que é igual a atual e se refere ao indice) deve ser maior que 0, pois não há indice negativo
            let itemAnalise = lista[analise] //salva a informação do indice. Essa let vai salvar a const livros (que importou o objeto de 2listaLivros) na posição inicial que é 0. A cada vez que roda o loop ele vai sendo adicionado mais 1
            let itemAnterior = lista[analise-1] //salva a informação do preço do menor livro. Essa let vai receber o valor do menor preço de livro armazenadi na let menor (que por sua vez recebeu a posição do objeto que foi importado)
            
            lista [analise] = itemAnterior; //Livros [atual] que indica uma posição e seu valor vai receber agora o valor da let LivroMenorPreco
            lista [analise-1] = itemAnalise //Livros [menor] que indica uma posição e seu valor vai receber agora o valor da let livroAtual   
            analise-- //-- indica quando a condição não for mais verdadeira, assim o while para de iterar
        }
    }
        console.log("Relação de livros por ordem alfabética: ");
        console.log(lista);
    }

    insertionSortNome(livros)