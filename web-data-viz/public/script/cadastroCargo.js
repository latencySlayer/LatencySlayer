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
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${usuario.nome}</td>
                <td>${usuario.empresa_nome}</td>
                <td>${usuario.dataRegistro}</td>
                <td class='ativarDados' style="cursor: pointer">✏️ Cadastre aqui</td>
            `;
            tabela.appendChild(linha);
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
            if (usuario.cargo = null) {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${usuario.nome}</td>
                <td>${usuario.empresa_nome}</td>
                <td>${usuario.dataRegistro}</td>
                <td class='ativarDados' style="cursor: pointer">✏️ Cadastre Aqui</td>
            `;
            tabela.appendChild(linha);
            } else {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${usuario.nome}</td>
                <td>${usuario.empresa_nome}</td>
                <td>${usuario.dataRegistro}</td>
                <td class='ativarDados' style="cursor: pointer">${usuario.cargo}</td>
            `
            tabela.appendChild(linha);
            }
        });
        const telaDados = document.querySelector('.telaDados');

        document.querySelectorAll('.ativarDados').forEach(classe => {
        classe.addEventListener('click', () => {
        telaDados.classList.add('ativadoDados');
        })}); 
    })
    .catch(erro => {
        console.error("Erro ao buscar usuários:", erro);
    });
}
