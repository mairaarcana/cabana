function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// cabeçalho
exibirTexto('.cabecalho-titulo', 'GRIMOIRE');
exibirTexto('.cabecalho-subtitulo', 'diário de magia');
// botão de voltar
exibirTexto('.botao-voltar', '❮❮❮');
// rodapé
exibirTexto('.rodape-desenvolvedor', 'Desenvolvido por ');
exibirTexto('.rodape-desenvolvedor-link', 'Maira Araújo');
exibirTexto('.rodape-local-ano', 'Rio de Janeiro | 2026');
exibirTexto('.rodape-hospedagem', 'Hospedado gratuitamente no ');
exibirTexto('.rodape-hospedagem-link', 'GitHub');