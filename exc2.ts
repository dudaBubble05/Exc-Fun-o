/* 
Nome: Maria Eduarda Freitas
Exercício 2 - Crie uma função que receba 3 números 
como parâmetro e retorne o MENOR dentre eles. 
*/


const teclado = require (`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));
let n3: number = parseInt(teclado(`Digite o terceiro número: `));


function verificacao (n1:number, n2:number, n3:number): number{
    if(n1 < n2 && n1 < n3){
        return n1;
    }
    else if(n2 < n1 && n2 < n3){
        return n2;
    }
    else if(n3 < n1 && n3 < n2){
        return n3;
    }
    else {
        return 0;
    }
}
verificacao(n1,n2,n3);


