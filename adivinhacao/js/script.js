const BotaoVoltar = document.querySelector(".Voltar");
const BotaoReiniciar = document.querySelector(".Reiniciar");
const BotaoEnviarPalpite = document.querySelector(".EnviarPalpite");
const BotaoDificuldade = document.querySelector(".Dificuldade");
const BotaoModo = document.querySelector(".Modo");

const CaixaPalpite = document.querySelector(".CaixaPalpite");
const Situacao = document.querySelector("#Situacao");
const QuantidadeTentativas = document.querySelector("#QuantidadeTentativas");
const Tag = document.querySelector(".Tag");

let tentativas = 0;
let jogoAtivo = true;

let dificuldadeAtual = "Média";
let numeroMinimo = 1;
let numeroMaximo = 100;

let modoAtual = "SinglePlayer";
let jogadorAtual = 1;

let NumeroAleatorio = gerarNumero();

function gerarNumero() {
    return Math.floor(Math.random() * numeroMaximo) + numeroMinimo;
}

function reiniciarJogo() {

    tentativas = 0;
    jogoAtivo = true;

    jogadorAtual = 1;

    QuantidadeTentativas.textContent = tentativas;

    NumeroAleatorio = gerarNumero();

    CaixaPalpite.disabled = false;
    BotaoEnviarPalpite.disabled = false;

    CaixaPalpite.value = "";

    Tag.textContent = `Digite um número entre ${numeroMinimo} e ${numeroMaximo}:`;

    CaixaPalpite.min = numeroMinimo;
    CaixaPalpite.max = numeroMaximo;

    if(modoAtual === "Multiplayer"){
        Situacao.textContent =
        "👥 Multiplayer ativado! Jogador 1 começa.";
    }else{
        Situacao.textContent =
        "🔄 Jogo reiniciado!";
    }
}

BotaoDificuldade.addEventListener("click", function () {

    if(dificuldadeAtual === "Fácil") {
        dificuldadeAtual = "Média";
        numeroMaximo = 100;
    }else if(dificuldadeAtual === "Média") {
        dificuldadeAtual = "Difícil";
        numeroMaximo = 1000;
    }else{
        dificuldadeAtual = "Fácil";
        numeroMaximo = 10;
    }

    numeroMinimo = 1;

    BotaoDificuldade.textContent = `Dificuldade: ${dificuldadeAtual}`;

    reiniciarJogo();
});

BotaoModo.addEventListener("click", function(){

    if(modoAtual === "SinglePlayer"){
        modoAtual = "Multiplayer";
        BotaoModo.textContent = "Modo: Multiplayer";
    }else{
        modoAtual = "SinglePlayer";
        BotaoModo.textContent =
        "Modo: SinglePlayer";
    }

    reiniciarJogo();
});

BotaoVoltar.addEventListener("click", function () {
    window.location.href = "../index.html";
});

BotaoReiniciar.addEventListener("click", function () {
    reiniciarJogo();
});

BotaoEnviarPalpite.addEventListener("click", function () {

    if (!jogoAtivo) return;

    const Palpite = parseInt(CaixaPalpite.value);

    if (isNaN(Palpite) || Palpite < numeroMinimo || Palpite > numeroMaximo){

        Situacao.textContent = `⚠️ Digite um número entre ${numeroMinimo} e ${numeroMaximo}.`;

        return;
    }

    tentativas++;

    QuantidadeTentativas.textContent = tentativas;

    if (Palpite < NumeroAleatorio) {
        Situacao.textContent = `📈 O número é maior que ${Palpite}.`;
    }else if(Palpite > NumeroAleatorio) {
        Situacao.textContent = `📉 O número é menor que ${Palpite}.`;
    }else{
        if(modoAtual === "SinglePlayer"){
            Situacao.textContent = `✅ Você acertou o número ${NumeroAleatorio} em ${tentativas} tentativas!`;
        }else{
            Situacao.textContent = `🏆 Jogador ${jogadorAtual} acertou o número ${NumeroAleatorio}!`;
        }

        jogoAtivo = false;

        CaixaPalpite.disabled = true;
        BotaoEnviarPalpite.disabled = true;
    }

    if(modoAtual === "Multiplayer" && jogoAtivo){

        if(jogadorAtual === 1){
            jogadorAtual = 2;
        }else{
            jogadorAtual = 1;
        }

        Situacao.textContent += ` Agora é a vez do Jogador ${jogadorAtual}.`;
    }

    CaixaPalpite.value = "";
});

CaixaPalpite.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        BotaoEnviarPalpite.click();
    }

});