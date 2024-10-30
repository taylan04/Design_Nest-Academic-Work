let nome = document.getElementById("nome")
let email = document.getElementById("email")
let senha = document.getElementById("senha")

function limpar() {
    nome.value = ""
}

function restaurar() {
    if (nome.value === "") {
        nome.value = "Usuário"
    }
}

function limpar2() {
    email.value = "" 
}

function restaurar2() {
    if(email.value === "") {
        email.value = "Email"
    }
}

function limpar3() {
    senha.value = ""
}

function restaurar3() {
    if(senha.value === "") {
        senha.value = "Senha"
    }
}
