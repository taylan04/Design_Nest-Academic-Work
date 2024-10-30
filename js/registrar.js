let nomeDoUsuario =  document.getElementById("nome")
let sobrenomeDoUsuario = document.getElementById("sobrenome")
let usuario = document.getElementById("usuario")
let senhaDoUsuario = document.getElementById("senha")
let email = document.getElementById("email")

function limpar() {
    nomeDoUsuario.value = ""
}

function restaurar() {
    if (nomeDoUsuario.value === "") {
        nomeDoUsuario.value = "Nome *"
    }
}

function limpar2() {
    sobrenomeDoUsuario.value = ""
}

function restaurar2() {
    if (sobrenomeDoUsuario.value === "") {
        sobrenomeDoUsuario.value = "Sobrenome *"
    }
}

function limpar3() {
    senhaDoUsuario.value = ""
}

function restaurar3() {
    if ( senhaDoUsuario.value === "") {
        senhaDoUsuario.value = "Crie uma senha *"
    }
}

function limpar4() {
    usuario.value = ""
}

function restaurar4() {
    if (usuario.value === "") {
        usuario.value = "Usuário *"
    }
}

function limpar5() {
    email.value = ""
}

function restaurar5() {
    if(email.value === "") {
        email.value = "Email *"
    }
}