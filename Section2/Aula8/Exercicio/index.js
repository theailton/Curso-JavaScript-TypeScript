/*
Ailton Santos da Silva Filho tem 25 anos, pesa 56 kg
tem 1.6 de altura e seu indiceMassaCorporal é de ?25.9259259?
Ailton Santos nasceu em 1997
*/


const nome = 'Ailton Santos';
const sobrenome = 'da Silva Filho';
const idade = 25;
const peso = 56;
const alturaEmMetros = 1.60;

let indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
let anoNascimento;

const anoAtual = 2022;
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nascem em ${anoNascimento}.`);
