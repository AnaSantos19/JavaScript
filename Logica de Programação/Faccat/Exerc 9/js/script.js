alert("Reajuste salarial");
let salarioAtual = parseFloat(prompt("Digite o valor atual do seu salário: "));
let percentualReajuste = 6.87; 
let valorReajuste = (salarioAtual / 100) * percentualReajuste;
let salarioReajustado = salarioAtual + valorReajuste;

alert("O salário atual é de: R$ " + salarioAtual.toFixed(2));
alert("O percentual de reajuste é de: " + percentualReajuste.toFixed(2) + "%");
alert("O valor do reajuste é de: R$ " + valorReajuste.toFixed(2));
alert("O salário reajustado será de: R$ " + salarioReajustado.toFixed(2));