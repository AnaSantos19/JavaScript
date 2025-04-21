alert("Faz a leitura da idade do usuário em dias");
let anos = parseInt(prompt("Digite quantos anos você tem: "));
let meses = parseInt(prompt("Digite quantos meses completos se passaram desde o seu último aniversário (0-11): "));
let dias = parseInt(prompt("Digite quantos dias se passaram *após* completar esses meses: "));
let resultado = (anos * 365) + (meses * 30) + dias;
alert("Sua idade em dias é: " + resultado);