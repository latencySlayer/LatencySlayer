const btnCadastrar = document.querySelector('.cadastrarMaquina')
const telaCadastro = document.querySelector('.telaCadastro')

btnCadastrar.addEventListener('click', () => {
    telaCadastro.classList.add('ativado');
});

lista_maquinas = [];

function cadastrar() {
    var codigoVar = Number(codMaq.value);
    var ramVar = mRam.value;
    var discoVar = mDisk.value;
    var cpuVar = mCpu.value;

    if (codigoVar == '' || ramVar == '' || discoVar == '' || cpuVar == '') {
        alert('Informe todos os campos');
        return; 
    } 

    for (let i = 0; i < lista_maquinas[0].length; i++) {
        if (codigoVar == lista_maquinas[0][i].codigoMaquina) {
            alert('Essa máquina já foi cadastrada');
            return; 
        }
    }

    fetch('/maquina/cadastrar', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            codigoServer: codigoVar,
            ramServer: ramVar,
            discoServer: discoVar,
            cpuServer: cpuVar,
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log("Dados Cadastrados")

            const telaCadastro = document.querySelector('.telaCadastro')
            telaCadastro.classList.remove('ativado');
            maquinas()
        } else {
            throw "erro ao tentar realizar o cadastro!";
        }

    }).catch(function (resposta) {
        console.log("ERRO;", resposta)
    })
}

function pesquisa() {
    var pesquisaVar = ipt_pesquisa.value

    fetch('/maquina/pesquisa', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pesquisaServer: pesquisaVar,
        })
    }).then(resposta => resposta.json()).then(maquinas => {
        lista_maquinas.push(maquinas)
        const tabela = document.querySelector(".maquinas table");
        tabela.innerHTML = `
            <tr>
                <th>Código Máquina</th>
                <th>Nome Servidor</th>
                <th>Data Cadastro</th>
                <th>Editar</th>
                <th>Excluir</th>
            </tr>
        `;
        maquinas.forEach(maquina => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${maquina.codigoMaquina}</td>
                <td>LatencySlayer</td>
                <td>${maquina.dataRegistro}</td>
                <td id='ativarDados' style="cursor: pointer">✏️ Edite aqui</td>
                <td id='ativarExcluir' style="cursor: pointer">🗑️ Exclua aqui</td>
            `;
            tabela.appendChild(linha);
        });
    }).catch(function (resposta) {
        console.log("ERRO;", resposta)
    })

}

function maquinas() {
    fetch("/maquina/maquinas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resposta => resposta.json()).then(maquinas => {
        lista_maquinas.push(maquinas)
        const tabela = document.querySelector(".maquinas table");
        tabela.innerHTML = `
            <tr>
                <th>Código Máquina</th>
                <th>Nome Servidor</th>
                <th>Data Cadastro</th>
                <th>Editar</th>
                <th>Excluir</th>
            </tr>
        `;
        maquinas.forEach(maquina => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${maquina.codigoMaquina}</td>
                <td>LatencySlayer</td>
                <td>${maquina.dataRegistro}</td>
                <td id='ativarDados' style="cursor: pointer">✏️ Edite aqui</td>
                <td id='ativarExcluir' style="cursor: pointer">🗑️ Exclua aqui</td>
            `;
            tabela.appendChild(linha);

            const telaDados = document.querySelector('.telaDados')
            const telaExcluir = document.querySelector('.telaExcluir')

            document.getElementById('ativarDados').addEventListener('click', () => {
            telaDados.classList.add('ativadoDados');
            });
                
            document.getElementById('ativarExcluir').addEventListener('click', () => {
            telaExcluir.classList.add('ativadoExcluir');
            });
        });
    })
    .catch(erro => {
        console.error("Erro ao buscar máquinas:", erro);
    });
}

function metricasDados() {
    const telaDados = document.querySelector('.telaDados')

    document.getElementById('btn_dados').addEventListener('click', () => {
    telaDados.classList.remove('ativadoDados');
});
}
