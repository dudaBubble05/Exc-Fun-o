/*
Nome: Maria Eduarda Freitas
Exercício 1 - Faça uma função que recebe um valor inteiro e verifica se o valor é par.
A unção deve retornar 1 se o número for par e 0 se for ímpar.
*/
var teclado = require("prompt-sync")();
var numero = parseInt(teclado("Digite um n\u00FAmero inteiro: "));
function verificar(inteiro) {
    console.log("Verificando se ".concat(inteiro, " \u00E9 \u00EDmpar ou par..."));
    console.log("Se for \u00EDmpar - 0  e se for par - 1");
    var resto = numero % 2;
    if (resto == 0) {
        return 1;
    }
    else {
        return 0;
    }
    return resto;
}
console.log(verificar(numero));
