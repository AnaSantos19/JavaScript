alert("Contador de votos");
let habitantes = parseFloat(prompt("Digite o número de habitantes no município: "));
let votos = parseFloat(prompt("Digite o número de habitantes que foram votar: "));
let validos = parseFloat(prompt("Digite o número de votos validos:  "));
let brancos = parseFloat (prompt("Digite o número de votos brancos: "));
let nulos = parseFloat (prompt("Digite o número de votos nulos: "));

let percentualVotantes = (votos / habitantes) * 100;
let percentualValidos = (validos / votos) * 100;
let percentualBrancos = (brancos / votos) * 100;
let percentualNulos = (nulos / votos) * 100;

alert("Percentual de votantes: " + percentualVotantes.toFixed(2) + "%");
alert("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
alert("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
alert("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");