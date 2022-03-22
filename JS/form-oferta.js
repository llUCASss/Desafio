const formOferta = document.querySelector("form")

const cidadeOferta = document.querySelector(".cidade");

const bairroOferta = document.querySelector(".bairro");

const errorOferta = document.querySelector("#errorOferta")

formOferta.addEventListener("submit", (event) =>{

    let menssages = []

    if(cidadeOferta.value === "" || cidadeOferta == null){

        menssages.push("PREENCHA O CAMPO CIDADE")

    }

    if(bairroOferta.value === "" || cidadeOferta == null){

        menssages.push("PREENCHA O CAMPO BAIRRO")

    }

    if(menssages.length > 0){

        event.preventDefault()

        errorOferta.innerHTML = menssages.join("<br>")

    }else{

        cidadeOferta.value = "";

        bairroOferta.value = "";

    }

    

})





