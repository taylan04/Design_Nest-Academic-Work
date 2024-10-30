let nomeDoUsuario =  document.getElementById("nome")
let sobrenomeDoUsuario = document.getElementById("sobrenome")
let usuario = document.getElementById("usuario")
let senhaDoUsuario = document.getElementById("senha")
let email = document.getElementById("email")
let mensagem = document.getElementById("mensagem")
let logo = document.querySelector(".logo")

function limpar(campo) {
    campo.value = ""
}

function restaurar(campo, padrao) {
    if (campo.value === "") {
        campo.value = padrao
    }
}

function animacao(campo) {
    campo.classList.remove("tremer")

    void campo.offsetWidth;
    campo.classList.add("tremer");
}

function girarLogo() {
    logo.classList.remove("rotacionar"); 
    void logo.offsetWidth; 
    logo.classList.add("rotacionar");
}

function registrando() {

    let validador = true

     function bordaVermelha(campo){
        campo.style.border = "1px solid red"
     }

    if(nomeDoUsuario.value === "Nome *" || nomeDoUsuario.value === "") {
        validador = false
        bordaVermelha(nomeDoUsuario)
        animacao(nomeDoUsuario)
    
   } 

   if (sobrenomeDoUsuario.value === "Sobrenome *" || sobrenomeDoUsuario.value === "") {
    validador = false
    bordaVermelha(sobrenomeDoUsuario)
    animacao(sobrenomeDoUsuario)
   } 

   if (email.value === "Email *" || email.value === "") {
    validador = false
    bordaVermelha(email)
    animacao(email)
   }

   if (usuario.value === "Usuário *" || usuario.value === "") {
    validador = false
    usuario.style.border = "1px solid red"
    animacao(usuario)
   }
 
   if (senhaDoUsuario.value === "Crie uma senha *" || senhaDoUsuario.value === "") {
    validador = false
    bordaVermelha(senhaDoUsuario)
    animacao(senhaDoUsuario)
   }

   if(email.value.includes("@")) {
    console.log("ok")
   } else {
    validador = false
    bordaVermelha(email)
    animacao(email)
   }

   if (senhaDoUsuario.value.length < 8 || !/[A-Z]/.test(senhaDoUsuario.value) ||  !/[@\$\^\&\*\(\)\+\=\[\]\"\|\/\?]/.test(senhaDoUsuario.value)) {
    validador = false
    bordaVermelha(senhaDoUsuario)
    animacao(senhaDoUsuario)
   }

   if (validador) {
    localStorage.setItem("nomeDoUsuario", nome.value);
    localStorage.setItem("sobrenomeDoUsuario", sobrenomeDoUsuario.value)
    localStorage.setItem("usuario", usuario.value)
    localStorage.setItem("email", email.value);
    localStorage.setItem("senha", senha.value);
    girarLogo()
    console.log("ok")
    window.location.href = "../other_pages/login.html"
   } else {
    girarLogo()
       mensagem.innerText = "Preencha todos os dados corretamente!"
   }
}