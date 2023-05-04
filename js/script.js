
//declara variaveis
//let nome2 = "Derick";
//const nome3 = "Ruan";

// regra 1 = inicializar const e não modificar
//regra 2 = nao altera o valor durante o fluxo do programa
// const = se usa para coisas que sejam usadas com frquencia e nao sao alteradas como pi
//const PI = 3.14;

//const e let não sofrem hoisting 
// let = tipo de declarador comum como string, numero, ojetos
//hoisting pega as variaveis var e coloca no ponto do programa

//var nome1 = "Petroni";

//if/(nome1 !== "" ){
    //var nome1 = "Geovana";
//}

//console.log(nome1);

// defer impede que o sincronismo do codigo seja carregado ate que o script seja carregado

//id não se repete

let botao = document.getElementsById("meu-btn");
//console.log(botao.textContent);

botao.addEventListener("click", function(){ 
    //console.log(this.textContent);
    // funcao matematica math // random = retorna numero aleatorio entre 0 e 1 // floor = arredonda um nmr para baixo // ceil = arredonda o nmr para cima // round = arrendonda um nmr aleatoriamente

    let r=0, g=0, b=0;
    r = Math.random(Math.random()*255);
    g = Math.random(Math.random()*255);
    b = Math.random(Math.random()*255);
    
    //this.setAttribute("style, background-color:rgb("+r+", "+g+", "+b+");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});


