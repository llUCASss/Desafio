/*------------------------------BOTÂO DO EVENTO-------------------------------------------------*/ 

const botao = document.querySelector(".botao__forum");

/*----------------------------------------------------------------------------------------------*/

/*-----------------------------------FUNÇÂO DO EVENTO-------------------------------------------*/

botao.addEventListener("click",(event) => {

    event.preventDefault();

    validaEmail();

    respostaForum();

    ativar()
});

/*----------------------------------------------------------------------------------------------*/

/*-----------------------------------FUNÇÂO VALIDA EMAIL----------------------------------------*/

function validaEmail(){
    let campoEmail = document.getElementById("email").value;

    let regex_validation = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

    let mensagem = document.querySelector("#mensagem").value;
    var nomeDoEmail = retornaNomeEmail();
    let erro = document.getElementById("resposta");

    if(regex_validation.test(campoEmail) == false){
        erro.innerHTML = `Erro no envio: Endereço de mail inválido`;
    }
    
    if(regex_validation.test(campoEmail) && mensagem != ""){

        erro.innerHTML = `Obrigado pelo contato, ${nomeDoEmail}`;

    }if(campoEmail == "" && mensagem == "" || regex_validation.test(campoEmail) == true && mensagem == ""){

        erro.innerHTML = `Erro no envio: Insira uma mensagem`;

    }

}

/*----------------------------------------------------------------------------------------------*/

/*------------------------------------FUNÇÃO RETORNA USER---------------------------------------*/

function retornaNomeEmail(){
    var email = document.getElementById("email").value;
    var emailLista = email.split("@");
    return emailLista[0];
}

/*----------------------------------------------------------------------------------------------*/

/*-----------------------------------FUNÇÃO RETORNA CLASS---------------------------------------*/

function respostaForum(){

    const resposta = document.querySelector("#resposta-forum");

    const botaoRes = document.querySelector("#botao__resposta");

    botaoRes.classList.add("botao-res");

    botaoRes.innerHTML = "OK";

    resposta.classList.add("ativar");

}

/*----------------------------------------------------------------------------------------------*/

/*------------------------------------BOTÃO MENSAGEM--------------------------------------------*/

const botaoRes = document.querySelector("#botao__resposta");

/*----------------------------------------------------------------------------------------------*/

/*----------------------------------FUNÇÃO DESATIVA MENSAGEM------------------------------------*/

botaoRes.addEventListener("click", () =>{

    desativar();

});

/*-----------------------------------FUNÇÃO ADICIONA CLASS--------------------------------------*/

function desativar(){

    const resposta = document.querySelector("#resposta-forum");

    resposta.classList.add("desativar")


}

/*----------------------------------------------------------------------------------------------*/

/*-----------------------------------FUNÇÃO REMOVE CLASS----------------------------------------*/

function ativar(){

    const resposta = document.querySelector("#resposta-forum");

    resposta.classList.remove("desativar")

}

/*----------------------------------------------------------------------------------------------*/









