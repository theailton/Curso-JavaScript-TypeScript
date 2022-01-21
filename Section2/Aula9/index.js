// Aula explicando diferença de var e let
//  Dados primitivos

const name = 'Ailton'; //  string.
const num1 = 10; //  number.
let nome; //  variável undefined -> não aparece pra local nenhum na memória .
const name1 = null; //    Nulo -> não aponta pra local nenhum na memória.
const aprovado = true; //   boolean -> true or false, valores lógicos -> verdade ou falso.

console.log(typeof aprovado, aprovado); //  Usado para saber o tipo da váriavel.

const a = [1, 2];
const b = a;

console.log (a, b);