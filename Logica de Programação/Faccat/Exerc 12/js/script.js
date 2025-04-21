alert("Conversor de Temperatura Fahrenheit para Celsius");
let fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));

if (!isNaN(fahrenheit)) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  alert("Temperatura em Fahrenheit: " + fahrenheit.toFixed(2) + " °F");
  alert("Temperatura em Celsius: " + celsius.toFixed(2) + " °C");
  
} else {
  alert("Por favor, digite um valor numérico válido para a temperatura em Fahrenheit.");
}