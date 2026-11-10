// Quantidade de pessoas que assistiram o filme
var total = 45;

// Variáveis para guardar os resultados
var somaIdades = 0;
var maisVelha = 0;
var maisNova = 200;
var otimo = 0;
var bom = 0;
var regular = 0;
var pessimo = 0;
var mulheres = 0;
var homens = 0;
var outros = 0;

for (var i = 1; i <= total; i++) {
  var idade = parseInt(prompt("Pessoa " + i + " - Digite a idade:"));
  var sexo = prompt("Pessoa " + i + " - Digite o sexo (F = feminino, M = masculino, O = outros):").toUpperCase();
  var opiniao = parseInt(prompt("Pessoa " + i + " - Digite a opinião (4 = ótimo, 3 = bom, 2 = regular, 1 = péssimo):"));

  // Idades
  somaIdades = somaIdades + idade;

  if (idade > maisVelha) {
    maisVelha = idade;
  }
  if (idade < maisNova) {
    maisNova = idade;
  }

  // Opinião
  if (opiniao == 4) {
    otimo++;
  } else if (opiniao == 3) {
    bom++;
  } else if (opiniao == 2) {
    regular++;
  } else if (opiniao == 1) {
    pessimo++;
  }

  // Sexo
  if (sexo == "F") {
    mulheres++;
  } else if (sexo == "M") {
    homens++;
  } else {
    outros++;
  }
}

// Cálculos finais
var mediaIdade = somaIdades / total;
var porcentagem = ((otimo + bom) / total) * 100;

// Resultados
document.write("<h2>Resultados da pesquisa</h2>");
document.write("<p>Média da idade das pessoas: " + mediaIdade.toFixed(1) + " anos</p>");
document.write("<p>Idade da pessoa mais velha: " + maisVelha + " anos</p>");
document.write("<p>Idade da pessoa mais nova: " + maisNova + " anos</p>");
document.write("<p>Quantidade de pessoas que responderam péssimo: " + pessimo + "</p>");
document.write("<p>Porcentagem de pessoas que responderam ótimo e bom: " + porcentagem.toFixed(1) + "%</p>");
document.write("<p>Mulheres: " + mulheres + "</p>");
document.write("<p>Homens: " + homens + "</p>");
document.write("<p>Outros: " + outros + "</p>");
