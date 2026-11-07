let jogador = prompt("Escolha: pedra, papel ou tesoura.").toLowerCase();

let opcoes = ["pedra", "papel", "tesoura"];

let computador = opcoes[Math.floor(Math.random()*3)];

alert("Computador escolheu: " + computador);

if(jogador === computador){
    alert("O jogo empatou!");
} else if((jogador === "pedra" && computador === "tesoura") ||
          (jogador === "papel" && computador === "pedra") ||
          (jogador === "tesoura" && computador === "papel")){

    alert("Você foi o vencedor!");
} else if(jogador === "pedra" || jogador === "papel" || jogador === "tesoura"){
    alert("Você perdeu!");
} else{
    alert("Escolha inválida");
}