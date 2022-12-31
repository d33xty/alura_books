const botaoOrdena = document.getElementById('btnOrdenarPorPreco');
botaoOrdena.addEventListener('click', () => ordernarPreco());

function ordernarPreco(){
    console.log(livros);
    const precoOrdenado = livros.sort((livroA, livroB) => livroA.preco - livroB.preco);
    exibirOsLivrosNaTela(precoOrdenado);
}