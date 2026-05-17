const BotaoVoltar = document.querySelector(".Voltar");
let NumeroAleatorio = Math.floor(Math.random() * 100) + 1;

BotaoVoltar.addEventListener("click", function(){
    window.location.href = "../index.html";
});

const BotaoReiniciar = document.querySelector(".Reiniciar");

BotaoReiniciar.addEventListener("click", function(){
    NumeroAleatorio = Math.floor(Math.random() * 100) + 1;

    const Situacao = document.querySelector("#Situacao");
    Situacao.textContent = "Jogo reiniciado!";

    const CaixaPalpite = document.querySelector(".CaixaPalpite");
    CaixaPalpite.value = "";
});

const BotaoEnviarPalpite = document.querySelector(".EnviarPalpite");

BotaoEnviarPalpite.addEventListener("click", function(){
    const CaixaPalpite = document.querySelector(".CaixaPalpite");
    const Palpite = parseInt(CaixaPalpite.value);
    const Situacao = document.querySelector("#Situacao");

    if(Palpite < 1 || Palpite > 100 || isNaN(Palpite)){
        Situacao.textContent = "Por favor, digite um número entre 1 e 100.";
    }else if(Palpite < NumeroAleatorio){
        Situacao.textContent = "O número é maior do que " + Palpite + ". Tente novamente!";
    }else if(Palpite > NumeroAleatorio){
        Situacao.textContent = "O número é menor do que " + Palpite + ". Tente novamente!";
    }else{
        Situacao.textContent = "Parabéns! Você acertou o número " + NumeroAleatorio + "!";
        NumeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }

    CaixaPalpite.value = "";

});
