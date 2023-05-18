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

let listaDeUsuarios = [
    {
        nomeCompleto : "José das Couves", 
        emailUsuario : "lucas@email.com",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Juan Pelego", 
        emailUsuario : "juan@email.com",
        senhaUsuario: "123456"
    } 
    ,
    {
        nomeCompleto : "Caio", 
        emailUsuario : "caio@email.com",
        senhaUsuario: "123456"  
    }
    ,
    {
        nomeCompleto : "Derick Pelego", 
        emailUsuario : "derick@email.com",
        senhaUsuario: "123456"
    }
    ,
    {
        nomeCompleto : "Matheus Delgado", 
        emailUsuario : "matheus@email.com",
        senhaUsuario: "123456"
    }
];

const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("click", ()=>{

    //criando objeto de validação
    let userValidado = {
        emailUsuarioValidado : inputEmail.value,
        senhaUsuarioValidado : inputSenha.value
    }

    //criando uma interação com a list de objetos para realzar a validacao com o usuarioValidado

    try{

        listaDeUsuarios.forEach((usuario)=>{
            //Realizando a validação
            //Comparando cada objeto da lista com o objeto montado com os dados que vieram do formulário.
            if(userValidado.emailUsuarioValidado == usuario.emailUsuario && userValidado.senhaUsuarioValidado == usuario.senhaUsuario){
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

        //redirect = mandar user p outra pagina
        setTimeout(()=>{
            window.location.href = "../home.html";
        }, 5000); //3000 = 3 seg
        window.location.href = "../home.html";



    }else{
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
    }
}
});






