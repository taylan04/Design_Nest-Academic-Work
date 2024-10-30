let nome = document.getElementById("nome")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
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

function logando() {

    let validador = true

    if (nome.value === "Usuário" || nome.value === "") {
        validador = false
        animacao(nome)
    } 

    if(email.value === "Email" || email.value === "") {
        validador = false
        animacao(email)
    }

    if(senha.value === "Senha" || senha.value === "") {
        validador = false
        animacao(senha)
    }

    if(validador) {
       
        const storageNome = localStorage.getItem("usuario");
        const storageEmail = localStorage.getItem("email");
        const storageSenha = localStorage.getItem("senha");

        if(nome.value === "admin" && email.value === "admin2024@gmail.com" && senha.value === "Admin@2024") {
            localStorage.setItem("user", "admin")
            localStorage.setItem("logado", "true")
        } else {
            localStorage.setItem("user", "user");
            localStorage.setItem("logado", "true");
        }

        if(nome.value === storageNome && email.value === storageEmail && senha.value === storageSenha ) {
            alert("Login efetuado com sucesso.")
            girarLogo()
            window.location.href = "../other_pages/index2.html"
        } else {
            girarLogo()
            animacao(nome)
            animacao(email)
            animacao(senha)
           mensagem.innerText = "Dados de login não existentes ou incorretos, para logar é preciso primeiro ter um cadastro, clique na opção abaixo."
        }
    }
}
