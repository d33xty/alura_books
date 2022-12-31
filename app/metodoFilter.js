const botoes = document.querySelectorAll('.btn')
botoes.forEach(botao => botao.addEventListener('click',filtraLivros));

function filtraLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorQuantidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calculaValorTotalDeLivrosDisponiveis(livrosFiltrados).toFixed(2);
        somaValorTotal(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function somaValorTotal(valor) {
    elementoComValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `
}