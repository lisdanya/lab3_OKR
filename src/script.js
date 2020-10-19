let jopa = document.querySelector('.menu-open');
let menu = document.querySelector('.menu');
let lil = document.getElementsByClassName('lil')
jopa.onclick = function() {
    // jopa.classList.toggle('show-menu');
    menu.classList.toggle('show-menu');
    for (let i = 0; i < lil.length; i++) {
        lil[i].classList.toggle('show-lil')
    }
}

