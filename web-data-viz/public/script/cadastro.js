const container = document.querySelector('.container');
const botaoCadastro = document.querySelector('.btn_cadastro');
const botaoLogin = document.querySelector('.btn_login');

botaoCadastro.addEventListener('click', () => {
    container.classList.add('ativado');
});

botaoLogin.addEventListener('click', () => {
    container.classList.remove('ativado');
});

// --------------- Sessão Cadastro -----------------

let arrayEmpresas = [];

function cadastrar() {
    var nomeVar = nome_ipt.value;
    var emailVar = email_ipt2.value;
    var cpfVar = cpf_ipt.value;
    var codigoVar = codigo_ipt.value;
    var senhaVar = senha_ipt2.value;
    var idEmpresaVincular;

    for (let i = 0; i < arrayEmpresas.length; i++) {
        if (arrayEmpresas[i].codigo == codigoVar) {
            idEmpresaVincular = arrayEmpresas[i].idEmpresa
            console.log("Codigo valido")
        } else {
            console.log("Codigo Invalido")
        }

    }

    fetch('/usuarios/cadastrar', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            cpfServer: cpfVar,
            senhaServer: senhaVar,
            idEmpresaVincularServer: idEmpresaVincular
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Dados Cadastrados")
            alert("Cadastro realizado com sucesso")
            var container = document.querySelector('.container');
            container.classList.remove('ativado');
        } else {
            alert('Erro ao tentar realizar o cadastro')
            throw "erro ao tentar realizar o cadastro!";
        }

    }).catch(function (resposta) {
        console.log("ERRO;", resposta)
    })
}

function listarEmpresas() {

    fetch("/empresas/listar", {
        method: 'GET',
    })
        .then(function (resposta) {
            resposta.json().then(function (json) {
                console.log(json)
                arrayEmpresas=json


                // json.forEach((empresa) => {
                //     arrayEmpresas.push(empresa)
                //     console.log(resposta.ok)
                //     console.log(arrayEmpresas[0].codigo)
                // });
            })

        }).catch(function (resposta) {
            console.log(resposta)
        })
}



// --------------- Sessão Login -----------------
function entrar() {
    var emailVar = email_ipt.value;
    var senhaVar = senha_ipt.value;

    fetch("/usuarios/autenticar", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function(resposta){
        console.log("entrei no then do entrar()!!")
            resposta.json().then(function(json){
                console.log(json)

                sessionStorage.NOME_USUARIO=json.nome;
                sessionStorage.EMAIL_USUARIO=json.email;
                sessionStorage.CARGO_USUARIO=json.cargo;
                sessionStorage.ID_EMPRESA=json.fkempresa;

                window.location = "./new_home.html"

            })
        
    }).catch(function(resposta){
        console.log(resposta)
    })
}