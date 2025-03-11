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
        alert('Informe todos os campos ')
    } else if (codigoVar != Number) {
        alert('O campo código só pode haver números')
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

        } else {
            throw "erro ao tentar realizar o cadastro!";
        }

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
                <td>12345</td>
                <td>LatencySlayer</td>
                <td>11/03/2025</td>
                <td><button onclick="editarMaquina(12345)" style="padding: 10px; padding-right: 100px"><box-icon name='edit-alt'></box-icon></button></td>
                <td><button onclick="excluirMaquina(12345)"><box-icon name='x-circle'></box-icon></button></td>
            `;
            tabela.appendChild(linha);
        });
    })
    .catch(erro => {
        console.error("Erro ao buscar máquinas:", erro);
    });
}
