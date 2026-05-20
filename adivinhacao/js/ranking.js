const ListaRanking = document.querySelector("#ListaRanking");
const BotaoVoltar = document.querySelector(".Voltar");
const ranking = JSON.parse(localStorage.getItem("RankingAdivinhacao")) || [];

ranking.sort((a, b) => b.rank - a.rank);

if(ranking.length === 0){
    ListaRanking.innerHTML = `
        <div class="Linha">
            <span>Nenhum jogador encontrado.</span>
            <span>0</span>
        </div>
    `;

}else{
    ranking.forEach(jogador => {

        ListaRanking.innerHTML += `
            <div class="Linha">
                <span>👤 ${jogador.nome}</span>
                <span>🏆 ${jogador.rank}</span>
            </div>
        `;
    });
}

BotaoVoltar.addEventListener("click", function(){
    window.location.href = "index.html";
});