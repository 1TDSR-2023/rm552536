
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

//Declarar um arrary
//let frutas = ["banana", "maçã", ["pêssego"], ["laranja"], ["limão"], ["melancia"], ["kiwi"]];
//imprimindo array
//console.log(frutas);
//console.log(frutas);
//console.log(frutas[0]);
//console.log(frutas[6]);

//Inserir um item ao final do array com método push (NomeDoItem):
//frutas.push("manga");
//console.log(frutas);
//Inserir um item no ínicio do array com método unshift (NomeDoItem): 
//frutas.unshift("maçã");
//console.log(frutas);

// //Remover um item ao final do array com o método pop();
// frutas.pop();
// console.log(frutas);
// //Remover um item no início do array com o método shift();
// frutas.shift();
// console.log(frutas);

// //Localizar um item no array utilizando o método indexOf(nomeDoItem);
// //Obs:Este método retorna o índice do item encontrado.
// // let indice = frutas.indexOf("laranja");
// // console.log(`O índice encontrado foi : ${indice}`);
// // console.log(`O item buscado foi : ${frutas[indice]}`);

// //Realizando uma remoção de item utilizando o método splice().
// //O método splice() recebe dois parâmetros, índice do item que será removido e a quantidade de vezes que este mesmo índice será removido. Ex: splice(indice, 1);
// //Dica:Utilize o método indexOf() para buscar o índice do item no array.
// let indice = frutas.indexOf("melancia");
// console.log(`O item encontrado no índice antes da remoção foi : ${ frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(frutas);
// console.log(`O item encontrado no índice depois da remoção foi : ${ frutas[indice]}`);

// //Concatenação de Arrays
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("Array 1 : " + nr1);
// console.log("Array 2 : " + nr2);

// //Concatenando os dois arrays em um novo array.
// let nr3 = [nr1,nr2];
// console.log("Array 3 : " + nr3);

// nr3.forEach( (nr)=>{
//     nr.forEach((n)=>{
//         console.log("Itens do Array 3 : " + n);
//     });
// } );
//Concatenação de Arrays
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log("Array 1 : " + nr1);
console.log("Array 2 : " + nr2);

//Concatenando os dois arrays em um novo array com o operador SPREAD( ... )
let nr3 = [...nr1,...nr2];
console.log("Array 3 : " + nr3);

nr3.forEach( (nr)=>{
        console.log(`Itens do Array 3 : ${nr}`);
} );



