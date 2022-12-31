function calculaValorTotalDeLivrosDisponiveis(livro) {
    return livro.reduce((acc, livro) => acc + livro.preco, 0);
}