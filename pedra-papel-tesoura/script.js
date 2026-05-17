const BotaoVoltar = document.querySelector(".Voltar");

const Pedra = document.querySelector("#Pedra");
const Papel = document.querySelector("#Papel");
const Tesoura = document.querySelector("#Tesoura");

const Situacao = document.querySelector("#Situacao");
const Resultado = document.querySelector("#resultado");

BotaoVoltar.addEventListener("click", function () {
    window.location.href = "../index.html";
});

const escolhas = ["Pedra", "Papel", "Tesoura"];

Pedra.addEventListener("click", function () {
    Jogar("Pedra");
});

Papel.addEventListener("click", function () {
    Jogar("Papel");
});

Tesoura.addEventListener("click", function () {
    Jogar("Tesoura");
});

function Jogar(jogador) {

    const computador = escolhas[Math.floor(Math.random() * escolhas.length)];

    let resultado = "";

    if (jogador === computador) {
        resultado = "Empate!";
    }else if((jogador === "Pedra" && computador === "Tesoura") || (jogador === "Papel" && computador === "Pedra") || (jogador === "Tesoura" && computador === "Papel")){
        resultado = "Você venceu!";
    }else{
        resultado = "Computador venceu!";
    }

    Situacao.textContent = "Você escolheu " + jogador + " | Computador escolheu " + computador;
    Resultado.textContent = resultado;
}