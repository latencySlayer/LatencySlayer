const container = document.querySelector('.container');
const botaoCadastro = document.querySelector('.btn_cadastro');
const botaoLogin = document.querySelector('.btn_login');

botaoCadastro.addEventListener('click', () => {
    container.classList.add('ativado');
});

botaoLogin.addEventListener('click', () => {
    container.classList.remove('ativado');
});