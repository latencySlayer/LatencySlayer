lista_usuarios = [];

const fechar = document.querySelector('.bx-x-circle')
const telaDados = document.querySelector('.telaDados')

fechar.addEventListener('click', () => {
    telaDados.classList.remove('ativadoDados')
})
    
function pesquisa() {
    var pesquisaVar = ipt_pesquisa.value

    fetch('/maquina/pesquisaUsers', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pesquisaServer: pesquisaVar,
        })
    }).then(resposta => resposta.json()).then(usuarios => {
        lista_usuarios.push(usuarios)
        const tabela = document.querySelector(".usuarios table");
        tabela.innerHTML = `
            <tr>
                <th>Nome Usuário</th>
                <th>Nome Empresa</th>
                <th>Data Cadastro</th>
                <th>Cargo/Editar</th>
            </tr>
        `;
        usuarios.forEach(usuario => {
            if (usuario.cargo == null) {
                const linha = document.createElement("tr");
                linha.innerHTML = `
                    
                    <td>${usuario.nome}</td>
                    <td>${usuario.empresa_nome}</td>
                    <td>${usuario.dataRegistro}</td>
                    <td class='ativarDados' style="cursor: pointer">✏️ Cadastre Aqui</td>
                `;
                tabela.appendChild(linha);
                } else {
                    if(usuario.cargo == "analista") {
                        const linha = document.createElement("tr");
                        linha.innerHTML = `
                            <td>${usuario.nome}</td>
                            <td>${usuario.empresa_nome}</td>
                            <td>${usuario.dataRegistro}</td>
                            <td class='ativarDados' style="cursor: pointer; color: #41448C;">${usuario.cargo.toUpperCase()}</td>
                        `
                        tabela.appendChild(linha);
                    } else {
                        const linha = document.createElement("tr");
                        linha.innerHTML = `
                            <td>${usuario.nome}</td>
                            <td>${usuario.empresa_nome}</td>
                            <td>${usuario.dataRegistro}</td>
                            <td class='ativarDados' style="cursor: pointer; color: #88418C;">${usuario.cargo.toUpperCase()}</td>
                        `
                        tabela.appendChild(linha);
                    }
                }
        });
        const telaDados = document.querySelector('.telaDados');
        
        document.querySelectorAll('.ativarDados').forEach(classe => {
        classe.addEventListener('click', () => {
        telaDados.classList.add('ativadoDados');
        })}); 
    }).catch(function (resposta) {
        console.log("ERRO;", resposta)
    })

}

function usuarios() {
    fetch("/maquina/usuarios", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resposta => resposta.json()).then(usuarios => {
        lista_usuarios.push(usuarios)
        const tabela = document.querySelector(".usuarios table");
        tabela.innerHTML = `
            <tr>
                <th>Nome usuário</th>
                <th>Nome Empresa</th>
                <th>Data Cadastro</th>
                <th>Cargo/Editar</th>
            </tr>
        `;
        usuarios.forEach(usuario => {
            if (usuario.cargo == null) {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${usuario.nome}</td>
                <td>${usuario.empresa_nome}</td>
                <td>${usuario.dataRegistro}</td>
                <td class='ativarDados' style="cursor: pointer">✏️ Cadastre Aqui</td>
            `;
            tabela.appendChild(linha);
            } else {
                if(usuario.cargo == "analista") {
                    const linha = document.createElement("tr");
                    linha.innerHTML = `
                        <td>${usuario.nome}</td>
                        <td>${usuario.empresa_nome}</td>
                        <td>${usuario.dataRegistro}</td>
                        <td class='ativarDados' style="cursor: pointer; color: #41448C;">${usuario.cargo.toUpperCase()}</td>
                    `
                    tabela.appendChild(linha);
                } else {
                    const linha = document.createElement("tr");
                    linha.innerHTML = `
                        <td>${usuario.nome}</td>
                        <td>${usuario.empresa_nome}</td>
                        <td>${usuario.dataRegistro}</td>
                        <td class='ativarDados' style="cursor: pointer; color: #88418C;">${usuario.cargo.toUpperCase()}</td>
                    `
                    tabela.appendChild(linha);
                }
            }
        });
        const telaDados = document.querySelector('.telaDados');

        document.querySelectorAll('.ativarDados').forEach(classe => {
        classe.addEventListener('click', () => {
        var idUsuario =sessionStorage.NOME_USUARIO=json.nome;
        telaDados.classList.add('ativadoDados');
        })}); 
        
    })
    .catch(erro => {
        console.error("Erro ao buscar usuários:", erro);
    });
}

function mudarCargo() {
    var cargo = slt_cargo.value;

    fetch("maquinas/cargo", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cargoServer: cargo
        })
    }).then(function(resposta){
        console.log("entrei no then do cargo()!!")
        resposta.json().then(function(json){
            console.log(json)
        }).catch(function(remove){
            console.log(resposta)
        })
    });
}


