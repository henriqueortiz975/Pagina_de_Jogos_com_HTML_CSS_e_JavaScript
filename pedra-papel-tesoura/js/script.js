// script.js

const BotaoVoltar = document.querySelector(".Voltar");
const BotaoReiniciar = document.querySelector(".Reiniciar");
const BotaoModo = document.querySelector(".Modo");
const BotaoRank = document.querySelector(".Rank");

const Pedra = document.querySelector("#Pedra");
const Papel = document.querySelector("#Papel");
const Tesoura = document.querySelector("#Tesoura");

const Situacao = document.querySelector("#Situacao");
const Resultado = document.querySelector("#resultado");

const escolhas = ["Pedra", "Papel", "Tesoura"];

let pontosJogador = 0;
let pontosComputador = 0;

let multiplayer = false;

let jogador1 = "";
let jogador2 = "";

let vezDoJogador = 1;

let nomeJogador = "";
let nomeJogador2 = "";

const PlacarJogador = document.createElement("div");
const PlacarComputador = document.createElement("div");

PlacarJogador.classList.add("Placar");
PlacarComputador.classList.add("Placar");

document.querySelector(".PedraPapelTesoura").appendChild(PlacarJogador);
document.querySelector(".PedraPapelTesoura").appendChild(PlacarComputador);

PedirNomes();

AtualizarPlacar();

function PedirNomes(){

    nomeJogador = prompt("Digite o nome do Jogador 1:");

    while(!nomeJogador || nomeJogador.trim() === ""){
        nomeJogador = prompt("Digite um nome válido:");
    }

    if(multiplayer){

        nomeJogador2 = prompt("Digite o nome do Jogador 2:");

        while(!nomeJogador2 || nomeJogador2.trim() === ""){
            nomeJogador2 = prompt("Digite um nome válido:");
        }

    }else{
        nomeJogador2 = "Computador";
    }
}

BotaoModo.addEventListener("click", function () {

    multiplayer = !multiplayer;

    pontosJogador = 0;
    pontosComputador = 0;

    AtivarBotoes();

    if(multiplayer){

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

    PedirNomes();

    AtualizarPlacar();
});

BotaoRank.addEventListener("click", function(){
    window.location.href = "ranking.html";
});

BotaoVoltar.addEventListener("click", function () {
    window.location.href = "../index.html";
});

BotaoReiniciar.addEventListener("click", function () {

    pontosJogador = 0;
    pontosComputador = 0;

    AtualizarPlacar();

    Situacao.textContent = "";

    Resultado.textContent = "🔄 Placar reiniciado!";

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

function Jogar(escolha){

    if(multiplayer){
        Multiplayer(escolha);
    }else{
        SinglePlayer(escolha);
    }
}

function SinglePlayer(jogador){

    const computador =
    escolhas[Math.floor(Math.random() * escolhas.length)];

    VerificarResultado(jogador, computador, nomeJogador, "Computador");
}

function Multiplayer(escolha){

    if(vezDoJogador === 1){

        jogador1 = escolha;

        vezDoJogador = 2;

        Situacao.textContent = `${nomeJogador2} escolha sua jogada.`;

        Resultado.textContent = "⌛ Aguardando Jogador 2...";

    }else{

        jogador2 = escolha;

        VerificarResultado(
            jogador1,
            jogador2,
            nomeJogador,
            nomeJogador2
        );

        jogador1 = "";
        jogador2 = "";

        vezDoJogador = 1;
    }
}

function VerificarResultado(jogador, adversario, nome1, nome2){

    let resultado = "";

    if(jogador === adversario){

        resultado = "🤝 Empate!";

    }else if(
        (jogador === "Pedra" && adversario === "Tesoura") ||
        (jogador === "Papel" && adversario === "Pedra") ||
        (jogador === "Tesoura" && adversario === "Papel")
    ){

        resultado = `🎉 ${nome1} venceu!`;

        pontosJogador++;

    }else{

        resultado = `🏆 ${nome2} venceu!`;

        pontosComputador++;
    }

    AtualizarPlacar();

    Situacao.innerHTML = `👤 ${nome1}: <strong>${Emoji(jogador)} ${jogador}</strong>
    | 👤 ${nome2}: <strong>${Emoji(adversario)} ${adversario}</strong>`;

    Resultado.textContent = resultado;

    MelhorDe5();
}

function AtualizarPlacar(){

    if(multiplayer){

        PlacarJogador.innerHTML = `👤 ${nomeJogador}: <strong>${pontosJogador}</strong>`;

        PlacarComputador.innerHTML = `👤 ${nomeJogador2}: <strong>${pontosComputador}</strong>`;

    }else{

        PlacarJogador.innerHTML = `👤 ${nomeJogador}: <strong>${pontosJogador}</strong>`;

        PlacarComputador.innerHTML = `💻 Computador: <strong>${pontosComputador}</strong>`;
    }
}

function Emoji(escolha){

    if(escolha === "Pedra") return "✊";

    if(escolha === "Papel") return "📄";

    if(escolha === "Tesoura") return "✂️";
}

function Animacao(botao){

    botao.classList.add("Ativo");

    setTimeout(() => {

        botao.classList.remove("Ativo");

    }, 300);
}

function SalvarRank(nome){

    let ranking =
    JSON.parse(localStorage.getItem("Ranking")) || [];

    const jogadorExistente =
    ranking.find(j => j.nome === nome);

    if(jogadorExistente){

        jogadorExistente.rank += 1;

    }else{

        ranking.push({
            nome: nome,
            rank: 1
        });
    }

    localStorage.setItem("Ranking",JSON.stringify(ranking)
    );
}

function MelhorDe5(){

    if(pontosJogador === 3){

        Resultado.textContent = `🏆 ${nomeJogador} venceu a Melhor de 5!`;

        SalvarRank(nomeJogador);

        DesativarBotoes();

    }else if(pontosComputador === 3){

        Resultado.textContent = `🏆 ${nomeJogador2} venceu a Melhor de 5!`;

        if(multiplayer){
            SalvarRank(nomeJogador2);
        }

        DesativarBotoes();
    }
}

function DesativarBotoes(){

    Pedra.disabled = true;
    Papel.disabled = true;
    Tesoura.disabled = true;
}

function AtivarBotoes(){

    Pedra.disabled = false;
    Papel.disabled = false;
    Tesoura.disabled = false;
}