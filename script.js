const botoes = document.querySelectorAll(".Botao");

botoes.forEach(function(Botao){

    Botao.addEventListener("click", function(){
        if(Botao.id === "Jogo1"){
            // Adcionar o jogo genius
            window.location.href = "genius/index.html";
        }else if(Botao.id === "Jogo2"){
            // Adcionar o Jogo da velha
            window.location.href = "jogo-da-velha/index.html";
        }else if(Botao.id === "Jogo3"){
            // Adcionar o Jogo de Adivinhação de Número
            window.location.href = "adivinhacao/index.html";
        }else if(Botao.id === "Jogo4"){
            // Adcionar o Jogo de pedra, papel e tesoura
            window.location.href = "pedra-papel-tesoura/index.html";       
        }else{
            // Alerta pra mim mesmo saber se funciona
            alert("Codigo esta incorreto");
        }
    });
});



