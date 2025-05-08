// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// Inicializa os eventos de clique para cada botão
function inicializarEventos() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            desmarcarBotaoSelecionado();
            selecionarBotao(botao);
            esconderPersonagemSelecionado();
            mostrarPersonagem(indice);
        });
    });
}

// Remove a classe 'selecionado' do botão atualmente selecionado
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

// Adiciona a classe 'selecionado' ao botão clicado
function selecionarBotao(botao) {
    botao.classList.add('selecionado');
}

// Remove a classe 'selecionado' do personagem atualmente visível
function esconderPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

// Adiciona a classe 'selecionado' ao personagem correspondente ao botão clicado
function mostrarPersonagem(indice) {
    personagens[indice].classList.add('selecionado');
}

// Chamada inicial para configurar os eventos
inicializarEventos();
