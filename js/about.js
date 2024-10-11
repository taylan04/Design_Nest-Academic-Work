const sumir = document.getElementById("sobre");

window.addEventListener('scroll', function() {
    const efeito = window.scrollY;

    if (efeito > 50) {
        sumir.classList.add('hidden');
    } else {
        sumir.classList.remove('hidden');
    }
});

const sumir2 = document.getElementById("logo");

window.addEventListener('scroll', function() {
    const efeito = window.scrollY;

    if (efeito > 50) {
        sumir2.classList.add('hidden');
    } else {
        sumir2.classList.remove('hidden');
    }
});
