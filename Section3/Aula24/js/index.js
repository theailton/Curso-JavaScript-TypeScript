/*
Uso dos if, else if, else

Entre  0 and 11h = Bom dia 
        12 and 17 = boa tarde
        18 and 23= boa noite

if pode se rusado sozinho
Sempre que utilizamos a palavra else, precisa obrigatoriamente de um if anteriormente
Pode ter varios else if na condição/checagem
Só pode ter um else na checagem
*/

const hora = 23;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
} else  if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
} else console.log('Hora incorreta!');


