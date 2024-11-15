const efeito = document.getElementById("sumir")
const efeito2 = document.getElementById("sumir2")
const ul = document.querySelector("ul")

window.addEventListener('scroll', function() {
    const effect = window.scrollY;

    if (effect > 100) {
        efeito.classList.add('hidden')
    } else {
        efeito.classList.remove('hidden')
    }
})

window.addEventListener('scroll', function() {
    const effect2 = window.scrollY;

    if (effect2 > 100) {
        efeito2.classList.add('hidden')
    } else {
        efeito2.classList.remove('hidden')
    }
})

let iniciarOuSair = document.getElementById("iniciar-sair")

const logado = localStorage.getItem("logado") === "true"
const admin = localStorage.getItem("user") === "admin"

if(logado) {
    iniciarOuSair.textContent = "| Sair"
     iniciarOuSair.href = "#"

    iniciarOuSair.addEventListener("click", function() {
        localStorage.setItem("logado", "false")
        window.location.href = "../index.html"
    })
} else {
    iniciarOuSair.textContent = "| Iniciar Sessão"
    iniciarOuSair.href = "../other_pages/login.html"
}

if (logado && admin) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.textContent = "Histórico"
a.setAttribute("href", "../other_pages/historico.html")
    ul.appendChild(li)
    li.appendChild(a)

}