/* 
        Operadores aritiméticos, de atribuição e incremento

    Aritiméticos
    + Adição / Concatenação ( - * / )
    ** Potenciação
    % Resto da divisão

    ++ Incremento
    -- Decremento
*/

//  NaN  = Not a Number - parseInt(inteiro), parseFloat(decimais), Number(); Converser String para Number;
const num1 = 5;
const num2 = 3;
const num3 = 10;

console.log((num1 + num2) * num3);
console.log(num3 % num2); // Resto da divisão
console.log(num1 ** num2); // Potenciação
console.log('--------');

let contador = 0;

contador += 50;
console.log(contador);
contador += 50;
console.log(contador);
contador+= 50;
console.log(contador);