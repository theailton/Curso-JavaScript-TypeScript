// capiturar o submit do formulario
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
     e.preventDefault(); // evita que o formulario seja enviado
     // Capturado os inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    // convertido os inputs para numbers
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    // Checando se os inputs foram convertidos para Numbers
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }
    // atribuidos os valores em variaveis para utilizar na impressão dos dados
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    // mensagem criada
    const msg = `Seu ICM é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

// 
function getNivelImc (imc) {
    const nivel =  ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau1 ',
'Obesidade grau 2', 'Obesidade grau 3'];
    // baseado no imc , foram retornadas as mensagens referente ao array nivel.
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//calcular nivel do imc
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
// criar paragrafo 
function criaP () {
    const p = document.createElement('p');
    return p;
}

// guardar o resultado e seta o resultado se for valido;
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    //vai informar a cor da mensagem se for true or false
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else p.classList.add('bad');
    // mensagem que vai ser setada na tela;
    p.innerHTML = msg;
    resultado.appendChild(p);
}
