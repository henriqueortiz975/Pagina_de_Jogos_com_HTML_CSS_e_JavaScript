const blocos = document.querySelectorAll(".bloco");
const tag = document.querySelector(".Tag");

let jogadorAtual = "X";
let jogoAtivo = true;
let modoSinglePlayer = false;

const botaoModo = document.querySelector(".modo");

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

// ALTERAR MODO
botaoModo.addEventListener("click", function(){

    modoSinglePlayer = !modoSinglePlayer;

    if(modoSinglePlayer){
        botaoModo.innerText = "Modo: Singleplayer";
    }else{
        botaoModo.innerText = "Modo: Multiplayer";
    }

    reiniciarJogo();

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

function jogar(bloco, jogador){

    bloco.innerText = jogador;

    bloco.style.fontSize = "60px";
    bloco.style.fontWeight = "bold";

    if(jogador === "X"){
        bloco.style.color = "#0073ff";
    }
    else{
        bloco.style.color = "#ff0000";
    }

}

function trocarJogador(){

    if(jogadorAtual === "X"){
        jogadorAtual = "O";

        if(modoSinglePlayer){
            tag.innerText = "Vez da Máquina";
        }else{
            tag.innerText = "Vez do 2º Jogador";
        }

    }else{
        jogadorAtual = "X";
        tag.innerText = "Vez do 1º Jogador";
    }

}

function finalizarJogo(){

    if(jogadorAtual === "X"){
        tag.innerText = "1º Jogador venceu! 🏆";
    }else{

        if(modoSinglePlayer){
            tag.innerText = "Máquina venceu! 🤖";
        }else{
            tag.innerText = "2º Jogador venceu! 🏆";
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

        if(
            blocoA.innerText !== "" &&
            blocoA.innerText === blocoB.innerText &&
            blocoB.innerText === blocoC.innerText
        ){

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

const BotaoVoltar = document.querySelector(".Voltar");

BotaoVoltar.addEventListener("click", function(){
    window.location.href = "../index.html";
});

const BotaoReiniciar = document.querySelector(".Reiniciar");

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

    tag.innerText = "Vez do 1º Jogador";

}