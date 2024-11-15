let nomeDoUsuario =  document.getElementById("nome")
let sobrenomeDoUsuario = document.getElementById("sobrenome")
let usuario = document.getElementById("usuario")
let senhaDoUsuario = document.getElementById("senha")
let email = document.getElementById("email")
let mensagem = document.getElementById("mensagem")
let logo = document.querySelector(".logo")



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

let usuarios = {
    nome: "x",
    sobrenome: "x",
    usuario: "x", 
    email: "x", 
    senha: "x"
}

class Pessoas {
     constructor(nomeDoUsuario, sobrenomeDoUsuario, usuario, email, senha) {
        this.nomeDoUsuario = nomeDoUsuario
        this.sobrenomeDoUsuario = sobrenomeDoUsuario
        this.usuario = usuario
        this.email = email
        this.senha = senha
     }
}

function registrando() {

    let validador = true

     function bordaVermelha(campo){
        campo.style.border = "1px solid red"
     }

    if(nomeDoUsuario.value === "") {
        validador = false
        bordaVermelha(nomeDoUsuario)
        animacao(nomeDoUsuario)
    
   } 

   if (sobrenomeDoUsuario.value === "") {
    validador = false
    bordaVermelha(sobrenomeDoUsuario)
    animacao(sobrenomeDoUsuario)
   } 

   if (email.value === "") {
    validador = false
    bordaVermelha(email)
    animacao(email)
   }

   if (usuario.value === "") {
    validador = false
    usuario.style.border = "1px solid red"
    animacao(usuario)
   }
 
   if (senhaDoUsuario.value === "") {
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
    let novoUsuario = new Pessoas (
        nomeDoUsuario.value,
        sobrenomeDoUsuario.value,
        usuario.value,
        email.value,
        senhaDoUsuario.value
    )

    let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || []

    let existe = listaDeUsuarios.find(u => u.usuario === usuario.value || u.email === email.value)

    if(existe) {
        mensagem.textContent = `Usuário ou e-mail já cadastrado!`
    } else {
        listaDeUsuarios.push(novoUsuario)
        localStorage.setItem("listaUsuarios", JSON.stringify(listaDeUsuarios))
        girarLogo()
        console.log("ok")
        window.location.href = "../other_pages/login.html"
    }} else {
    girarLogo()
       mensagem.innerText = "Preencha todos os dados corretamente!"
   }
}