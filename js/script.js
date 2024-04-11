// CONTROLE DAS PROPRIEDADES DO TOPO DE ACORDO COM A ROLAGEM DA PAGINA
const header = document.querySelector("header");

window.addEventListener("sroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

// DINAMICAS PARA MENU SANDUICHE
let menu = document.querySelector('#navbar-icon');
let navlist = document.querySelector('.navbar-header');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

//animação de entrada.
const sr = ScrollReveal({
    distance: '50px',
    duration:2500,
    reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})