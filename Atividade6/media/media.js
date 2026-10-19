let nome = prompt("Qual é o seu nome? ");
let n1 = prompt("Qual a primeira nota? ");
let n2 = prompt("Qual a segunda nota? ");
let n3 = prompt("Qual a terceira nota? ");
let n4 = prompt("Qual a quarta nota? ");

let media = (parseFloat(n1) +  parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
media.toFixed(2);

alert("A média do aluno " + nome + " é: " + media);