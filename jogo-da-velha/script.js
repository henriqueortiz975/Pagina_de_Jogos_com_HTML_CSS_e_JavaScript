const blocos = document.querySelectorAll(".bloco");
const tag = document.querySelector(".Tag");

let jogadorAtual = "X";
let jogoAtivo = true;

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

blocos.forEach((bloco) => {

    bloco.addEventListener("click", function(){

        if(bloco.innerText !== "" || !jogoAtivo){
            return;
        }

        bloco.innerText = jogadorAtual;

        bloco.style.fontSize = "60px";
        bloco.style.fontWeight = "bold";

        if(jogadorAtual === "X"){
            bloco.style.color = "#60a5fa";
        }
        else{
            bloco.style.color = "#f87171";
        }

        if(verificarVitoria()){
            if(jogadorAtual === "X"){
                tag.innerText = "1º Jogador venceu! 🏆";
            }else{
                tag.innerText = "2º Jogador venceu! 🏆";
            }
            jogoAtivo = false;
            return;

        }else if(verificarEmpate()){
            tag.innerText = "Empate!";
            jogoAtivo = false;
            return;
        }else if(jogadorAtual === "X"){
            jogadorAtual = "O";
            tag.innerText = "Vez do 2º Jogador";
        }else{
            jogadorAtual = "X";
            tag.innerText = "Vez do 1º Jogador";
        }

    });

});

function verificarVitoria(){

    for(let combinacao of Vitoria){

        const [a, b, c] = combinacao;

        const blocoA = document.getElementById(a).innerText;
        const blocoB = document.getElementById(b).innerText;
        const blocoC = document.getElementById(c).innerText;

        if(blocoA !== "" && blocoA === blocoB && blocoB === blocoC){
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
