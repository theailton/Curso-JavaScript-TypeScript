//  Mais algumas curiosidades sobre strings

console.log("Usando texto com \"Aspas duplas\"");
//  Caso queiramos usar aspas duplas no contéudo da string sendo que ela foi iniciada já com aspas duplas
//  colocamos uma barra invertida antes das duas aspas. ^^^^

let umaString = 'Ailton Santos';
console.log(umaString[7]);
//  Caso queiramos ver ou utilizar o caractere de um indice em especifico dessa string, colocamos entre colchetes
//  o valor especifico desse indíce.
//  OU utilizamos .charAt()
console.log(umaString.charAt(7));

console.log(umaString.match(/[a-z]/g)); // buscar expressões regulares, a tag  /g traz as letras minusculas 
//                                         no intervalo apresentado

let novaString = 'O rato roeu a roupa do rei de roma';
console.log(novaString.replace(/r/g, '#')); // Podemos alterar os caracteres por outro com essa função. Replace
//                                              Informando o carectere e depois para qual vai ser alterado;

console.log(novaString.length); // Informa o tamanho da string;
console.log(novaString.slice(2, 6)); //    Printar apenas o conteudo entre o intervalo solicitado;
console.log(novaString.split(' ')); //   Pode dividir a string no caractere informado;
console.log(novaString.toLowerCase()); // Imprimir toda a string em minuscula;
console.log(novaString.toUpperCase()); // Imprimir toda a string em maiusculo;