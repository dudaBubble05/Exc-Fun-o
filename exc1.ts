/* 
Nome: Maria Eduarda Freitas
Exercício 1 - Faça uma função que recebe um valor inteiro e verifica se o valor é par. 
A unção deve retornar 1 se o número for par e 0 se for ímpar.
*/

const teclado = require (`prompt-sync`)();

let numero: number = parseInt(teclado(`Digite um número inteiro: `));


function verificar (inteiro: number): number{
    console.log(`Verificando se ${inteiro} é ímpar ou par...`)
    console.log(`Se for ímpar - 0  e se for par - 1`)

    let resto = numero % 2;
    
    if(resto == 0){
        return 1;
    }
    else{
        return 0;
    }
    return resto
}
console.log(verificar(numero))