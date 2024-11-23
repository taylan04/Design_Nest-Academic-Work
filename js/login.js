let nome = document.getElementById("nome")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
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

function logando() {

    let validador = true

    if (nome.value === "") {
        validador = false
        animacao(nome)
    } 

    if(email.value === "") {
        validador = false
        animacao(email)
    }

    if(senha.value === "") {
        validador = false
        animacao(senha)
    }

    if(validador) {
       
        const dadosUsuarioSalvos = JSON.parse(localStorage.getItem("listaUsuarios"))

        const dadosEncontrados = dadosUsuarioSalvos.find((u) => u.usuario === nome.value && u.email === email.value && u.senha === senha.value)

        if(nome.value === "admin" && email.value === "admin2024@gmail.com" && senha.value === "Admin@2024") {
            localStorage.setItem("user", "admin")
            localStorage.setItem("logado", "true")
            alert("Login de administrador efetuado com sucesso.");
             window.location.href = "../index.html"
            girarLogo();
            return
        } 

        if( dadosEncontrados) {
            localStorage.setItem("user", "user");
            localStorage.setItem("logado", "true");
            alert("Login efetuado com sucesso.")
            girarLogo()
            window.location.href = "../index.html"
        } else {
            girarLogo()
            animacao(nome)
            animacao(email)
            animacao(senha)
           mensagem.innerText = "Dados de login inexistentes ou incorretos. OBS: Para logar é preciso primeiro ter um cadastro, clique na opção abaixo."
        }
    }
}
