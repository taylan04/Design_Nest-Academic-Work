const sumir = document.getElementById("adquira");
const sumir2 = document.getElementById("adquira2");

window.addEventListener('scroll', function() {
    const efeito = window.scrollY;

    if (efeito > 50) {
        sumir.classList.add('hidden');
    } else {
        sumir.classList.remove('hidden');
    }
});

window.addEventListener('scroll', function() {
    const efeito2 = window.scrollY;

    if (efeito2 > 50) {
        sumir2.classList.add('hidden');
    } else {
        sumir2.classList.remove('hidden');
    }
});