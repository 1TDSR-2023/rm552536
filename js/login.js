const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("keyup", ()=>{

    const lblEmail = document.querySelector("label[for='idEmail']");

    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style","outline-color:#ff0000;");
        lblEmail.setAttribute("style","color:#ff0000;");
    }else{
        inputEmail.setAttribute("style","outline-color:#00ff00;");
        lblEmail.setAttribute("style","color:#00ff00;");
    }
    
});

const inputSenha = document.querySelector("#idPass");
const eyePass = document.querySelector(".fa");

eyePass.addEventListener("click", ()=>{


    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye-slash");
    }else{
        inputSenha.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye");
    }
});

//lista de objeto eh um array com mts objetos dentro
//objeto em js pode ser declarada com const e dentro das chaves estão os atributos
//so me devolve o objeto inteiro se as validações baterem
//usuario e usuario 2 sao objetos

//const usuario = {
    //nomeCompleto : "José das Couves", 
    //emailUsuario : "lucas@email.com",
    //senhaUsuario: "123456"
//}

//const usuario2 = {
    //nomeCompleto : "Juan Pelego", 
    //emailUsuario : "juan@email.com",
    //senhaUsuario: "123456"
//}

//lista de usuario = para quando fizer a validaçao, fazer em cima da lista
//objeto pode ser const pq quando altera, altera atributos

// let listaDeUsuarios = [
//     {
//         nomeCompleto : "José das Couves", 
//         emailUsuario : "lucas@email.com",
//         senhaUsuario: "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Juan Pelego", 
//         emailUsuario : "juan@email.com",
//         senhaUsuario: "123456"
//     } 
//     ,
//     {
//         nomeCompleto : "Caio", 
//         emailUsuario : "caio@email.com",
//         senhaUsuario: "123456"  
//     }
//     ,
//     {
//         nomeCompleto : "Derick Pelego", 
//         emailUsuario : "derick@email.com",
//         senhaUsuario: "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Matheus Delgado", 
//         emailUsuario : "matheus@email.com",
//         senhaUsuario: "123456"
//     }
// ];

//declaração local  storage - funçao de window (pertence ao window)
// set.Item leva dois parametros, chave e valor
//JSON.stringify = converte objeto em string

//localStorage.setItem("lista-user", JSON.stringify(listaDeUsuarios));

const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("click", ()=>{

    //criando objeto de validação
    let userLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    //criando uma interação com a list de objetos para realzar a validacao com o usuarioValidado

    let userValidado = {};

    try{

        //recuperando do local storage
        //let listaDeUsuarios = JSON.parse(localStorage.getItem("lista-user"));

        listaDeUsuarios.forEach((usuario)=>{
            //Realizando a validação
            //Comparando cada objeto da lista com o objeto montado com os dados que vieram do formulário.
            if(userLogado.emailUsuarioLogado == usuario.emailUsuario && userLogado.senhaUsuarioLogado == usuario.senhaUsuario){
                userValidado = usuario;
                throw "VALIDADO";
            }
        });

        throw "SENHA OU NOME DE USUÁRIO INVÁLIDOS!";

    //inner hmtl insere outros elementos html no html como por exemplo um div e insere span dentro da div
    //msg = parametro pq quando o throw eh jogado dentro de catch a mensagem eh lancada dentro de msg
    
}catch(msg){

    const msgStatus = document.querySelector("#msgStatus");

    if(msg == "VALIDADO"){
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>Usuario: ${userValidado.nomeCompleto} Login efetuado com Sucesso!</strong></span>`;

        //adicionando usuariao validado
        localStorage.setItem("user-validado", JSON.stringify(userValidado));

        //redirect = mandar user p outra pagina
        setTimeout(()=>{
            window.location.href = "../home.html";
        }, 3000); //3000 = 3 seg
        

    }else{
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
    }
}

//cookie so armazena texto e mt pouco texto

});






