alert("Nota aluno");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
  const peso1 = 2;
  const peso2 = 3;
  const peso3 = 5;
  const somaPesos = peso1 + peso2 + peso3;

  let mediaFinal = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;

  alert("Nota 1: " + nota1.toFixed(2));
  alert("Nota 2: " + nota2.toFixed(2));
  alert("Nota 3: " + nota3.toFixed(2));
  alert("Média Final: " + mediaFinal.toFixed(2));
} 