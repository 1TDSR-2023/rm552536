//eval = converte string em expressao matematica

function insereNumeroNoVisor(botao, visor){
    visor.value += botao.value
}

// arrow function tem estrtura declarativa =>
// => usada para ser rapida e eh declarativa 
// function (normal) envolve objetificação e se usa quando tem objeto

const calculoDoVisor = (visor)=>{
    visor.value = eval(visor.value);
}

// desafio 3 impeca a entrada de mais de uma vez do operador matematico