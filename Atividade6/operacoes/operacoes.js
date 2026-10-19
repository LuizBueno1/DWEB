let num1 = prompt("Qual o primeiro número?");
let num2 = prompt("Qual o segundo número?");

let soma = parseFloat(num1) + parseFloat(num2);
let sub = parseFloat(num1) - parseFloat(num2);
let pro = parseFloat(num1) * parseFloat(num2);
let div = parseFloat(num1) / parseFloat(num2);
let res =  parseFloat(num1) % parseFloat(num2);

alert("A soma é: " + soma + "\nA subtração é: " + sub + "\nA multipiclação é: " + pro + "\nA divisão é: " + div + "\nO módulo é: " + res);