const BotaoVoltar = document.querySelector(".Voltar");
const BotaoReiniciar = document.querySelector(".Reiniciar");
const BotaoModo = document.querySelector(".Modo");

const Pedra = document.querySelector("#Pedra");
const Papel = document.querySelector("#Papel");
const Tesoura = document.querySelector("#Tesoura");

const Situacao = document.querySelector("#Situacao");
const Resultado = document.querySelector("#resultado");

const escolhas = ["Pedra", "Papel", "Tesoura"];

let pontosJogador = localStorage.getItem("PontosJogador") || 0;
let pontosComputador = localStorage.getItem("PontosComputador") || 0;

let multiplayer = false;

let jogador1 = "";
let jogador2 = "";
let vezDoJogador = 1;

const PlacarJogador = document.createElement("div");
const PlacarComputador = document.createElement("div");

PlacarJogador.classList.add("Placar");
PlacarComputador.classList.add("Placar");

document.querySelector(".PedraPapelTesoura").appendChild(PlacarJogador);
document.querySelector(".PedraPapelTesoura").appendChild(PlacarComputador);

AtualizarPlacar();

BotaoModo.addEventListener("click", function () {

    multiplayer = !multiplayer;

    if(multiplayer) {
        BotaoModo.textContent = "Modo: MultiPlayer";
        Resultado.textContent = "👥 Multiplayer ativado!";
        Situacao.textContent = "Jogador 1 escolha sua jogada.";
    }else{
        BotaoModo.textContent = "Modo: SinglePlayer";
        Resultado.textContent = "💻 SinglePlayer ativado!";
        Situacao.textContent = "";
    }

    jogador1 = "";
    jogador2 = "";
    vezDoJogador = 1;
});

BotaoVoltar.addEventListener("click", function () {
    window.location.href = "../index.html";
});

BotaoReiniciar.addEventListener("click", function () {

    pontosJogador = 0;
    pontosComputador = 0;

    localStorage.setItem("PontosJogador", pontosJogador);
    localStorage.setItem("PontosComputador", pontosComputador);

    AtualizarPlacar();

    Situacao.textContent = "";
    Resultado.textContent = "Placar reiniciado!";

    AtivarBotoes();
});

Pedra.addEventListener("click", function () {
    Animacao(Pedra);
    Jogar("Pedra");
});

Papel.addEventListener("click", function () {
    Animacao(Papel);
    Jogar("Papel");
});

Tesoura.addEventListener("click", function () {
    Animacao(Tesoura);
    Jogar("Tesoura");
});

function Jogar(escolha) {
    if(multiplayer){
        Multiplayer(escolha);
    }else{
        SinglePlayer(escolha);
    }
}

function SinglePlayer(jogador) {
    const computador = escolhas[Math.floor(Math.random() * escolhas.length)];
    VerificarResultado(jogador, computador, "Você", "Computador");
}

function Multiplayer(escolha) {
    if (vezDoJogador === 1) {
        jogador1 = escolha;
        vezDoJogador = 2;
        Situacao.textContent = "Jogador 2 escolha sua jogada.";
        Resultado.textContent = "⌛ Aguardando Jogador 2...";
    }else {
        jogador2 = escolha;
        VerificarResultado(jogador1, jogador2, "Jogador 1", "Jogador 2");
        jogador1 = "";
        jogador2 = "";
        vezDoJogador = 1;
    }
}

function VerificarResultado(jogador, adversario, nome1, nome2) {

    let resultado = "";

    if (jogador === adversario) {
        resultado = "🤝 Empate!";
    }else if((jogador === "Pedra" && adversario === "Tesoura") || (jogador === "Papel" && adversario === "Pedra") || (jogador === "Tesoura" && adversario === "Papel")){
        resultado = `🎉 ${nome1} venceu!`;
        pontosJogador++;
    }else{
        resultado = `🏆 ${nome2} venceu!`;
        pontosComputador++;
    }

    localStorage.setItem("PontosJogador", pontosJogador);
    localStorage.setItem("PontosComputador", pontosComputador);

    AtualizarPlacar();

    Situacao.innerHTML = `👤 ${nome1}: <strong>${Emoji(jogador)} ${jogador}</strong> | 👤 ${nome2}: <strong>${Emoji(adversario)} ${adversario}</strong>`;

    Resultado.textContent = resultado;

    MelhorDe5();
}

function AtualizarPlacar() {

    if (multiplayer) {
        PlacarJogador.innerHTML = `👤 Jogador 1: <strong>${pontosJogador}</strong>`;
        PlacarComputador.innerHTML = `👤 Jogador 2: <strong>${pontosComputador}</strong>`;
    } else {
        PlacarJogador.innerHTML = `👤 Jogador: <strong>${pontosJogador}</strong>`;
        PlacarComputador.innerHTML =  `💻 Computador: <strong>${pontosComputador}</strong>`;
    }
}

function Emoji(escolha) {
    if (escolha === "Pedra") return "✊";
    if (escolha === "Papel") return "📄";
    if (escolha === "Tesoura") return "✂️";
}

function Animacao(botao) {

    botao.classList.add("Ativo");

    setTimeout(() => {
        botao.classList.remove("Ativo");
    }, 300);
}

function MelhorDe5() {

    if(pontosJogador === 3){
        Resultado.textContent = "🏆 Vitória na Melhor de 5!";
        DesativarBotoes();
    }else if(pontosComputador === 3){
        Resultado.textContent = "🏆 Adversário venceu a Melhor de 5!";
        DesativarBotoes();
    }
}

function DesativarBotoes() {
    Pedra.disabled = true;
    Papel.disabled = true;
    Tesoura.disabled = true;
}

function AtivarBotoes() {
    Pedra.disabled = false;
    Papel.disabled = false;
    Tesoura.disabled = false;
}