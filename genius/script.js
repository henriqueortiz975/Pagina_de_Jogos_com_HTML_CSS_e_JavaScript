// localStorage.clear();

/* =========================
   VARIÁVEIS
========================= */

let cores = [];
let modo = "facil";

let sequencia = [];
let jogador = [];

let rodada = 0;
let pontos = 0;

let podeClicar = false;

let multiplayer = false;

let jogadorAtual = 1;

let pontosJogador1 = 0;
let pontosJogador2 = 0;

let ranking = {

    facil: [],
    medio: [],
    dificil: []

};

let nomeJogador = "";

/* =========================
   ELEMENTOS
========================= */

const telaLogin =
document.querySelector(".TelaLogin");

const inputNome =
document.querySelector(".InputNome");

const botaoEntrar =
document.querySelector(".BotaoEntrar");

const selecionarModo =
document.querySelector(".SelecionarModo");

const toggleMultiplayer =
document.querySelector(".ToggleMultiplayer");

const botaoIniciar =
document.querySelector(".Iniciar");

const botaoRank =
document.querySelector(".Rank");

const rodadaSpan =
document.querySelector(".Rodadas");

const pontosSpan =
document.querySelector(".Pontos");

const recordeSpan =
document.querySelector(".Recorde");

const listaRank =
document.querySelector(".ListaRank");

const telaDerrota =
document.querySelector(".TelaDerrota");

const rodadaFinal =
document.querySelector(".RodadaFinal");

const pontosFinais =
document.querySelector(".PontosFinais");

const botaoReiniciar =
document.querySelector(".BotaoReiniciar");

const botaoVoltar =
document.querySelector(".BotaoVoltar");

const mensagemCentro =
document.querySelector(".MensagemCentro");

const textoDerrota =
document.querySelector(".TextoDerrota");

/* =========================
   LOGIN
========================= */

botaoEntrar.addEventListener(
"click",
function(){

    const nome =
    inputNome.value.trim();

    if(nome == ""){

        alert("Digite seu nome!");

        return;

    }

    nomeJogador = nome;

    modo =
    selecionarModo.value;

    multiplayer =
    toggleMultiplayer.checked;

    if(modo == "facil"){

        cores = [
            "Verde",
            "Vermelho"
        ];

    }

    if(modo == "medio"){

        cores = [
            "Verde",
            "Vermelho",
            "Amarelo",
            "Azul"
        ];

    }

    if(modo == "dificil"){

        cores = [
            "Verde",
            "Vermelho",
            "Amarelo",
            "Azul",
            "Roxo",
            "Rosa"
        ];

    }

    mostrarCoresModo();

    atualizarRanking();

    atualizarRecorde();

    telaLogin.style.display =
    "none";

});

/* =========================
   MODOS
========================= */

function mostrarCoresModo(){

    const verde =
    document.querySelector(".Verde");

    const vermelho =
    document.querySelector(".Vermelho");

    const amarelo =
    document.querySelector(".Amarelo");

    const azul =
    document.querySelector(".Azul");

    const roxo =
    document.querySelector(".Roxo");

    const rosa =
    document.querySelector(".Rosa");

    /* RESET */

    document
    .querySelectorAll(".Cor")
    .forEach(function(cor){

        cor.style.display = "block";

        cor.style.width = "";
        cor.style.height = "";

        cor.style.top = "";
        cor.style.bottom = "";

        cor.style.left = "";
        cor.style.right = "";

        cor.style.border = "";
        cor.style.borderRadius = "";

    });

    /* =========================
       FÁCIL
    ========================= */

    if(modo == "facil"){

        amarelo.style.display = "none";
        azul.style.display = "none";
        roxo.style.display = "none";
        rosa.style.display = "none";

        verde.style.width = "50%";
        verde.style.height = "100%";

        verde.style.top = "0";
        verde.style.left = "0";

        verde.style.borderRight =
        "7px solid #0b1229";

        verde.style.borderRadius =
        "100% 0 0 100%";

        vermelho.style.width = "50%";
        vermelho.style.height = "100%";

        vermelho.style.top = "0";
        vermelho.style.right = "0";

        vermelho.style.borderLeft =
        "7px solid #0b1229";

        vermelho.style.borderRadius =
        "0 100% 100% 0";

    }

    /* =========================
       MÉDIO
    ========================= */

    if(modo == "medio"){

        roxo.style.display = "none";
        rosa.style.display = "none";

        verde.style.width = "50%";
        verde.style.height = "50%";

        verde.style.top = "0";
        verde.style.left = "0";

        verde.style.borderRight =
        "7px solid #0b1229";

        verde.style.borderBottom =
        "7px solid #0b1229";

        verde.style.borderRadius =
        "100% 0 0 0";

        vermelho.style.width = "50%";
        vermelho.style.height = "50%";

        vermelho.style.top = "0";
        vermelho.style.right = "0";

        vermelho.style.borderLeft =
        "7px solid #0b1229";

        vermelho.style.borderBottom =
        "7px solid #0b1229";

        vermelho.style.borderRadius =
        "0 100% 0 0";

        amarelo.style.width = "50%";
        amarelo.style.height = "50%";

        amarelo.style.bottom = "0";
        amarelo.style.left = "0";

        amarelo.style.borderTop =
        "7px solid #0b1229";

        amarelo.style.borderRight =
        "7px solid #0b1229";

        amarelo.style.borderRadius =
        "0 0 0 100%";

        azul.style.width = "50%";
        azul.style.height = "50%";

        azul.style.bottom = "0";
        azul.style.right = "0";

        azul.style.borderTop =
        "7px solid #0b1229";

        azul.style.borderLeft =
        "7px solid #0b1229";

        azul.style.borderRadius =
        "0 0 100% 0";

    }

    /* =========================
       DIFÍCIL
    ========================= */

    if(modo == "dificil"){

        verde.style.width = "50%";
        verde.style.height = "50%";

        verde.style.top = "0";
        verde.style.left = "0";

        verde.style.borderRight =
        "7px solid #0b1229";

        verde.style.borderBottom =
        "7px solid #0b1229";

        verde.style.borderTopLeftRadius =
        "100%";

        vermelho.style.width = "50%";
        vermelho.style.height = "50%";

        vermelho.style.top = "0";
        vermelho.style.right = "0";

        vermelho.style.borderLeft =
        "7px solid #0b1229";

        vermelho.style.borderBottom =
        "7px solid #0b1229";

        vermelho.style.borderTopRightRadius =
        "100%";

        amarelo.style.width = "50%";
        amarelo.style.height = "50%";

        amarelo.style.bottom = "0";
        amarelo.style.left = "0";

        amarelo.style.borderTop =
        "7px solid #0b1229";

        amarelo.style.borderRight =
        "7px solid #0b1229";

        amarelo.style.borderBottomLeftRadius =
        "100%";

        azul.style.width = "50%";
        azul.style.height = "50%";

        azul.style.bottom = "0";
        azul.style.right = "0";

        azul.style.borderTop =
        "7px solid #0b1229";

        azul.style.borderLeft =
        "7px solid #0b1229";

        azul.style.borderBottomRightRadius =
        "100%";

        rosa.style.width = "30%";
        rosa.style.height = "18%";

        rosa.style.top = "0";
        rosa.style.left = "35%";

        rosa.style.borderBottom =
        "7px solid #0b1229";

        rosa.style.borderRadius =
        "0 0 40px 40px";

        roxo.style.width = "30%";
        roxo.style.height = "18%";

        roxo.style.bottom = "0";
        roxo.style.left = "35%";

        roxo.style.borderTop =
        "7px solid #0b1229";

        roxo.style.borderRadius =
        "40px 40px 0 0";

    }

}

function atualizarRanking(){

    listaRank.innerHTML = "";

    const rankingModo =
    ranking[modo];

    if(rankingModo.length == 0){

        listaRank.innerHTML =
        "<li>Nenhuma pontuação.</li>";

        return;

    }

    rankingModo.forEach(function(
        jogador,
        indice
    ){

        const item =
        document.createElement("li");

        item.innerHTML =
        "#" + (indice + 1) +
        " 🎮 " +
        jogador.nome +
        " - " +
        jogador.pontos;

        listaRank.appendChild(item);

    });

}

function salvarPontuacao(){

    ranking[modo].push({

        nome:nomeJogador,
        pontos:pontos

    });

    ranking[modo].sort(function(a,b){

        return b.pontos - a.pontos;

    });

    ranking[modo] =
    ranking[modo].slice(0,5);

    localStorage.setItem(
        "ranking",
        JSON.stringify(ranking)
    );

    const recordeAtual =
    localStorage.getItem(
        "recorde_" + modo
    ) || 0;

    if(pontos > recordeAtual){

        localStorage.setItem(
            "recorde_" + modo,
            pontos
        );

    }

    atualizarRanking();

    atualizarRecorde();

}

function atualizarRecorde(){

    const recorde =
    localStorage.getItem(
        "recorde_" + modo
    ) || 0;

    recordeSpan.innerText =
    recorde;

}

/* =========================
   CENTRO
========================= */

function Centro(texto){

    mensagemCentro.innerText =
    texto;

}

/* =========================
   BOTÃO RANK
========================= */

let rankAberto = false;

botaoRank.addEventListener(
"click",
function(){

    const cardRank =
    document.querySelector(".CardRank");

    const card2 =
    document.querySelector(".Card2");

    const pontuacao =
    document.querySelector(".CardPontuacao");

    if(rankAberto == false){

        cardRank.style.display =
        "block";

        card2.style.display =
        "none";

        pontuacao.style.display =
        "none";

        rankAberto = true;

        botaoRank.innerText =
        "Voltar";

    }else{

        cardRank.style.display =
        "none";

        card2.style.display =
        "block";

        pontuacao.style.display =
        "block";

        rankAberto = false;

        botaoRank.innerText =
        "Rank";

    }

});

/* =========================
   INICIAR
========================= */

botaoIniciar.addEventListener(
"click",
iniciarJogo
);

function iniciarJogo(){

    sequencia = [];
    jogador = [];

    rodada = 0;
    pontos = 0;

    pontosJogador1 = 0;
    pontosJogador2 = 0;

    jogadorAtual = 1;

    atualizarPainel();

    proximaRodada();

}

/* =========================
   RODADAS
========================= */

function proximaRodada(){

    jogador = [];

    rodada++;

    atualizarPainel();

    const numeroAleatorio =
    Math.floor(
        Math.random() * cores.length
    );

    const corAleatoria =
    cores[numeroAleatorio];

    sequencia.push(corAleatoria);

    mostrarSequencia();

}

function mostrarSequencia(){

    podeClicar = false;

    if(multiplayer){

        Centro(
            "Jogador " +
            jogadorAtual
        );

    }else{

        Centro("Observe...");

    }

    sequencia.forEach(function(
        cor,
        indice
    ){

        setTimeout(function(){

            piscarCor(cor);

        }, indice * 1000);

    });

    setTimeout(function(){

        podeClicar = true;

        Centro("Sua vez!");

    }, sequencia.length * 1000);

}

/* =========================
   SOM
========================= */

function tocarSom(cor){

    const frequencias = {

        Verde:261,
        Vermelho:329,
        Amarelo:392,
        Azul:523,
        Roxo:659,
        Rosa:784

    };

    const audioContext =
    new (
        window.AudioContext ||
        window.webkitAudioContext
    )();

    const oscillator =
    audioContext.createOscillator();

    const gainNode =
    audioContext.createGain();

    oscillator.connect(gainNode);

    gainNode.connect(
        audioContext.destination
    );

    oscillator.frequency.value =
    frequencias[cor];

    gainNode.gain.value = 0.08;

    oscillator.start();

    setTimeout(function(){

        oscillator.stop();

    },180);

}

/* =========================
   EFEITO
========================= */

function piscarCor(cor){

    const elemento =
    document.querySelector("." + cor);

    tocarSom(cor);

    elemento.style.filter =
    "brightness(2)";

    elemento.style.transform =
    "scale(1.08)";

    setTimeout(function(){

        elemento.style.filter =
        "brightness(1)";

        elemento.style.transform =
        "scale(1)";

    },500);

}

/* =========================
   CLIQUES
========================= */

document
.querySelectorAll(".Cor")
.forEach(function(botao){

    botao.addEventListener(
    "click",
    function(){

        const cor =
        this.classList[1];

        cliqueJogador(cor);

    });

});

function cliqueJogador(cor){

    if(!podeClicar){
        return;
    }

    piscarCor(cor);

    jogador.push(cor);

    verificarJogada();

}

/* =========================
   VERIFICAÇÃO
========================= */

function verificarJogada(){

    const indiceAtual =
    jogador.length - 1;

    if(
        jogador[indiceAtual]
        !==
        sequencia[indiceAtual]
    ){

        perdeu();

        return;

    }

    if(
        jogador.length
        ===
        sequencia.length
    ){

        podeClicar = false;

        if(multiplayer){

            if(jogadorAtual == 1){

                pontosJogador1 += 10;

                jogadorAtual = 2;

            }else{

                pontosJogador2 += 10;

                jogadorAtual = 1;

            }

            pontos =
            pontosJogador1 +
            pontosJogador2;

        }else{

            pontos += 10;

        }

        atualizarPainel();

        setTimeout(function(){

            proximaRodada();

        },1000);

    }

}

/* =========================
   DERROTA
========================= */

function perdeu(){

    podeClicar = false;

    salvarPontuacao();

    rodadaFinal.innerText =
    rodada;

    if(multiplayer){

        if(
            pontosJogador1 >
            pontosJogador2
        ){

            textoDerrota.innerText =
            "Jogador 1 venceu!";

        }else if(
            pontosJogador2 >
            pontosJogador1
        ){

            textoDerrota.innerText =
            "Jogador 2 venceu!";

        }else{

            textoDerrota.innerText =
            "Empate!";

        }

        pontosFinais.innerText =
        pontosJogador1 +
        " x " +
        pontosJogador2;

    }else{

        pontosFinais.innerText =
        pontos;

    }

    Centro("Fim de jogo");

    telaDerrota.style.display =
    "flex";

}

botaoReiniciar.addEventListener(
"click",
function(){

    telaDerrota.style.display =
    "none";

    iniciarJogo();

});

botaoVoltar.addEventListener(
"click",
function(){

    telaDerrota.style.display =
    "none";

    Centro("GENIUS");

});

/* =========================
   PAINEL
========================= */

function atualizarPainel(){

    rodadaSpan.innerText =
    rodada;

    pontosSpan.innerText =
    pontos;

}