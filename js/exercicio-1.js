let botao = document.getElementById("meu-btn");
console.log(botao.textContent);

botao.addEventListener("click",function(){ 


    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    //this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

} );
 
function adicionarItem() {

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let lista = document.getElementById('lista');
    
    let novoItem = document.createElement('li');
    novoItem.innerText = 'Nome: ' + nome + ', E-mail: ' + email;
    
    lista.appendChild(novoItem);
    
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}

let btn_trocar = document.getElementById("btn-trocar");

    btn_trocar.addEventListener("click",function() {
        let img = document.querySelector("#imagem_lobo")

        if (img.getAttribute("src") == './img/lobo1.jpg') {
            let img = document.querySelector("#imagem_lobo")
            img.setAttribute('src', './img/lobo2.jpg');
        }
         else {
            let img = document.querySelector("#imagem_lobo")
            img.setAttribute('src', './img/lobo3.jpg');
         };
    });

function exibirMensagem() {
    var elementoMensagem = document.getElementById('mensagem');
    elementoMensagem.textContent = "Mensagem exibida ao clicar no botão!";
}

function ocultarElemento() {
    let paragrafo = document.getElementById("ocultarElemento");
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
}

