const blocos = document.querySelectorAll(".bloco");
const tag = document.querySelector(".Tag");

const botaoModo = document.querySelector(".modo");
const BotaoVoltar = document.querySelector(".Voltar");
const BotaoReiniciar = document.querySelector(".Reiniciar");
const BotaoRank = document.querySelector(".Rank");

let jogadorAtual = "X";
let jogoAtivo = true;
let modoSinglePlayer = false;

let nomeJogador1 = "";
let nomeJogador2 = "";

const Vitoria = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

PedirNomes();

AtualizarTag();

// ALTERAR MODO
botaoModo.addEventListener("click", function(){

    modoSinglePlayer = !modoSinglePlayer;

    if(modoSinglePlayer){

        botaoModo.innerText = "Modo: Singleplayer";

    }else{

        botaoModo.innerText = "Modo: Multiplayer";
    }

    PedirNomes();

    reiniciarJogo();

});

BotaoRank.addEventListener("click", function(){

    window.location.href = "ranking.html";

});

blocos.forEach((bloco) => {

    bloco.addEventListener("click", function(){

        if(bloco.innerText !== "" || !jogoAtivo){
            return;
        }

        jogar(bloco, jogadorAtual);

        const venceu = verificarVitoria();

        if(venceu){

            finalizarJogo();

            return;
        }

        if(verificarEmpate()){

            tag.innerText = "Empate!";

            jogoAtivo = false;

            return;
        }

        trocarJogador();

        // JOGADA DA MAQUINA
        if(modoSinglePlayer && jogadorAtual === "O" && jogoAtivo){

            setTimeout(() => {

                jogadaMaquina();

                const venceuMaquina = verificarVitoria();

                if(venceuMaquina){

                    finalizarJogo();

                    return;
                }

                if(verificarEmpate()){

                    tag.innerText = "Empate!";

                    jogoAtivo = false;

                    return;
                }

                trocarJogador();

            }, 500);

        }

    });

});

function PedirNomes(){

    nomeJogador1 = prompt("Digite o nome do Jogador 1:");

    while(!nomeJogador1 || nomeJogador1.trim() === ""){
        nomeJogador1 = prompt("Digite um nome válido:");
    }

    if(modoSinglePlayer){
        nomeJogador2 = "Máquina";
    }else{
        nomeJogador2 = prompt("Digite o nome do Jogador 2:");

        while(!nomeJogador2 || nomeJogador2.trim() === ""){
            nomeJogador2 = prompt("Digite um nome válido:");
        }
    }
}

function jogar(bloco, jogador){

    bloco.innerText = jogador;

    bloco.style.fontSize = "60px";
    bloco.style.fontWeight = "bold";

    if(jogador === "X"){
        bloco.style.color = "#0073ff";
    }else{
        bloco.style.color = "#ff0000";
    }

}

function trocarJogador(){

    if(jogadorAtual === "X"){
        jogadorAtual = "O";

        if(modoSinglePlayer){
            tag.innerText = `Vez da Máquina`;
        }else{
            tag.innerText = `Vez de ${nomeJogador2}`;
        }

    }else{
        jogadorAtual = "X";
        tag.innerText = `Vez de ${nomeJogador1}`;
    }

}

function finalizarJogo(){

    if(jogadorAtual === "X"){
        tag.innerText = `${nomeJogador1} venceu! 🏆`;
        SalvarRank(nomeJogador1);
    }else{

        if(modoSinglePlayer){
            tag.innerText = "Máquina venceu! 🤖";
        }else{
            tag.innerText = `${nomeJogador2} venceu! 🏆`;
            SalvarRank(nomeJogador2);
        }

    }

    jogoAtivo = false;

}

function jogadaMaquina(){

    let blocosVazios = [];

    blocos.forEach((bloco) => {

        if(bloco.innerText === ""){
            blocosVazios.push(bloco);
        }

    });

    if(blocosVazios.length === 0){
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * blocosVazios.length);

    jogar(blocosVazios[indiceAleatorio], "O");

}

function verificarVitoria(){

    for(let combinacao of Vitoria){

        const [a, b, c] = combinacao;

        const blocoA = document.getElementById(a);
        const blocoB = document.getElementById(b);
        const blocoC = document.getElementById(c);

        if(blocoA.innerText !== "" && blocoA.innerText === blocoB.innerText && blocoB.innerText === blocoC.innerText){
            blocoA.style.backgroundColor = "#22c55e";
            blocoB.style.backgroundColor = "#22c55e";
            blocoC.style.backgroundColor = "#22c55e";

            return true;
        }

    }

    return false;
}

function verificarEmpate(){

    for(let bloco of blocos){

        if(bloco.innerText === ""){
            return false;
        }

    }

    return true;
}

BotaoVoltar.addEventListener("click", function(){
    window.location.href = "../index.html";
});

BotaoReiniciar.addEventListener("click", function(){
    reiniciarJogo();
});

function reiniciarJogo(){

    blocos.forEach((bloco) => {

        bloco.innerText = "";

        bloco.style.fontSize = "0px";
        bloco.style.fontWeight = "normal";
        bloco.style.color = "black";

        bloco.style.backgroundColor = "";

    });
    jogadorAtual = "X";

    jogoAtivo = true;

    AtualizarTag();

}

function AtualizarTag(){
    tag.innerText = `Vez de ${nomeJogador1}`;
}

function SalvarRank(nome){

    let ranking = JSON.parse(localStorage.getItem("RankingVelha")) || [];

    const jogadorExistente = ranking.find(j => j.nome === nome);

    if(jogadorExistente){
        jogadorExistente.rank += 1;
    }else{
        ranking.push({nome: nome, rank: 1});
    }

    localStorage.setItem("RankingVelha", JSON.stringify(ranking));
}