let slider = document.querySelector("#slider");
let button = document.querySelector("#button");

let tamsenha = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword  = document.querySelector("#container-pass");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

tamsenha.innerHTML = slider.value;

slider.oninput = function(){
    tamsenha.innerHTML =this.value;
}

function gerarsenha () {
   let pass = ''; 

   for (let i = 0 , n = charset.length; i < slider.value; ++i){
       pass += charset.charAt(Math.floor(Math.random() * n ));    
   }
   containerPassword.classList.remove('hide');
   password.innerHTML = pass;
   novaSenha = pass;
}

function copy(){
   navigator.clipboard.writeText(novaSenha);
 alert("Senha Copiada com Sucesso!");
}
