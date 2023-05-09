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
 
function enviarContato() {

        // Obter o valor do campo de entrada
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        
        // Criar um novo elemento li
        let novoItem = document.createElement('li');
        // Definir o texto do novo item como o valor do campo de entrada
        novoItem.textContent = texto;
        
        // Obter a lista ul
        var lista = document.getElementById('listaContatos');
        
        // Adicionar o novo item à lista
        lista.appendChild(novoItem);
        
        // Limpar o campo de entrada
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';


}