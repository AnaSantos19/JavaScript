alert("Cálculo do Salário Final do Vendedor");

let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
let valorPorCarroVendido = parseFloat(prompt("Digite o valor da comissão por carro vendido:"));
let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas efetuadas:"));

if (isNaN(salarioFixo) || isNaN(valorPorCarroVendido) || isNaN(numeroCarrosVendidos) || isNaN(valorTotalVendas)) {
  alert("Por favor, digite valores numéricos válidos para todas as informações.");
} else {
  let comissaoFixa = numeroCarrosVendidos * valorPorCarroVendido;
  let comissaoVendas = valorTotalVendas * 0.05;
  let salarioFinal = salarioFixo + comissaoFixa + comissaoVendas;

  alert("Salário Fixo: R$ " + salarioFixo.toFixed(2));
  alert("Comissão por Carro Vendido: R$ " + comissaoFixa.toFixed(2));
  alert("Comissão sobre Vendas: R$ " + comissaoVendas.toFixed(2));
  alert("Salário Final do Vendedor: R$ " + salarioFinal.toFixed(2));
}