const botoes = document.querySelectorAll(".Botao");

botoes.forEach(function(Botao){

    Botao.addEventListener("click", function(){
        if(Botao.id === "1"){
            // Adcionar o jogo genius
            window.open("genius/index.html");
        }else if(Botao.id === "2"){
            // Adcionar o Jogo da velha
            window.open("jogo-da-velha/index.html");
        }else if(Botao.id === "3"){
            // Adcionar o Jogo de Adivinhação de Número
            window.open("");
        }else if(Botao.id === "4"){
            // Adcionar o Jogo de Adivinhação de Número
            window.open("");            
        }else{
            // Alerta pra mim mesmo saber se funciona
            alert("Codigo esta errado animal");
        }
    });
});



