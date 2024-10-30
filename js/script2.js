let efeito = document.getElementById("sumir")
let efeito2 = document.getElementById("sumir2")

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

let logout = document.getElementById("logout")

function logout() {
    localStorage.removeItem("logado")
    localStorage.removeItem("user")
}