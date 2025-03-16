const container = document.querySelector('.container');
const botaoCadastro = document.querySelector('.btn_cadastro');
const botaoLogin = document.querySelector('.btn_login');

botaoCadastro.addEventListener('click', () => {
    container.classList.add('ativado');
});

botaoLogin.addEventListener('click', () => {
    container.classList.remove('ativado');
});

window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navBar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let botao = document.getElementById('btnMenu')
let containerBtn = document.getElementById('containerBtn')
let clicked = false
let clicked2 = false

window.addEventListener('resize', () => {
if (window.innerWidth > 870) { 
    containerBtn.style.display = "none"
    botao.style.display = "block";
    console.log('teste')
}
});


botao.addEventListener('click', ()=> {
        containerBtn.style.display = "flex"
        botao.style.display = "none"
        containerBtn.classList.add('animation1')
        containerBtn.classList.remove('animation2')
        clicked = true
})

let botao2 = document.getElementById('btnMenu2')
botao2.addEventListener('click', ()=> {
    containerBtn.classList.remove('animation1')
    containerBtn.classList.add('animation2')
    setTimeout(() => {
        containerBtn.style.display = "none"
    }, 450);

    setTimeout(() => {
        botao.style.display = "block"
    }, 500);
})
