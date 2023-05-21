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

console.log("VALOR : " + inputSenha.value);
    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye-slash");
    }else{
        inputSenha.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye");
    }

});


//OBJETO
// const usuario1 = {
//     nomeCompleto : "Lucas das Couves",
//     emailUsuario : "lucas@email.com",
//     senhaUsuario : "123456"
// }

// const usuario2 = {
//     nomeCompleto : "Juan Pelego",
//     emailUsuario : "juan@email.com",
//     senhaUsuario : "123456"
// }
// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

//LISTA DE USUÁRIOS
// let listaDeUsuarios = [
//     {
//         nomeCompleto : "Lucas das Couves",
//         emailUsuario : "lucas@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Juan Pelego",
//         emailUsuario : "juan@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Caio Tulipa",
//         emailUsuario : "tulipa@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Derick Gouvea",
//         emailUsuario : "dede@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Matheuzim Danado",
//         emailUsuario : "mateu@email.com",
//         senhaUsuario : "123456"
//     }
//     ,
//     {
//         nomeCompleto : "Leunardo Camacho",
//         emailUsuario : "leleu@email.com",
//         senhaUsuario : "123456"
//     }
// ];

// localStorage.setItem("lista-user", JSON.stringify(listaDeUsuarios));

const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{


    //Criando um Objeto USUÁRIO LOGADO
    let userLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    let userValidado = {};

    //Criando uma iteração com a lista de objetos para
    // realizar a validação com o usuarioValidado
   
try{

    //RECUPERANDO DO LOCAL-STORAGE
    let listaDeUsuarios =  JSON.parse(localStorage.getItem("lista-user"));

    listaDeUsuarios.forEach((usuario)=>{
        //Realizando a validação
        //Comparando cada objeto da lista com o objeto montado com os dados que vieram do formulário.
        if(userLogado.emailUsuarioLogado == usuario.emailUsuario && userLogado.senhaUsuarioLogado == usuario.senhaUsuario){
            userValidado = usuario;
            throw "VALIDADO";
        }
    });

    throw "SENHA OU NOME DE USUÁRIO INVÁLIDOS!";

}catch(msg){

    const msgStatus = document.querySelector("#msgStatus");

    if(msg == "VALIDADO"){
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>Usuário: ${userValidado.nomeCompleto} Login efetuado com Sucesso!</strong></span>`;

        //ADICIONANDO O USUÁRIO-VALIDADO NO LOCAL-STORAGE
        localStorage.setItem("user-validado", JSON.stringify(userValidado));

        //Criando um token com o Math.randon 
        const token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
        
        //ADICIONANDO O TOKEN NO LOCAL-STORAGE
        localStorage.setItem("user-token", token);

        //Redirect
        setTimeout(()=>{
            window.location.href = "../home.html";
        }, 3000);


    }else{
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = "<span><strong>Nome de usuário ou senha inválidos...</strong></span>";
    }
}
   
});