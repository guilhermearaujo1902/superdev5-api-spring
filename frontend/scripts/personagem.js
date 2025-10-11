function abrirFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.add('visivel');
}

function fecharFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.remove('visivel');
    limparCampos();
}

async function carregarTodos() {
    const respostaApi = await fetch('http://localhost:8080/personagem/todos');
    const personagemList = await respostaApi.json();

    const divPersonagemList = document.getElementById('personagemList');
    divPersonagemList.innerHTML = '';

    if (personagemList.length > 0) {
        for (let personagem of personagemList) {
            divPersonagemList.innerHTML += `
                <div class="card">
                    <img src="${personagem.imagem}" alt="">
                    <div class="card-content">
                        <h3>${personagem.nome}</h3>
                        <p>Código: ${personagem.id}</p>
                        <p>Universo: ${personagem.universo}</p>
                    </div>
                    <div class="card-botoes">
                        <button
                            class="btn btn-success btn-alterar"
                            onclick="carregarPersonagem(${personagem.id})">
                            Alterar
                        </button>
                        <button
                            class="btn btn-cancel btn-excluir"
                            onclick="excluir(${personagem.id})">
                            Excluir
                        </button>
                    </div>
                </div>
            `;
        }
    } else {
        divPersonagemList.innerHTML = '<p>Nenhum personagem adicionado na lista</p>';
        
    }
}

carregarTodos();

async function salvar() {

    const inputId = document.getElementById('id').value;
    const inputNome = document.getElementById('nome').value;
    const inputUniverso = document.getElementById('universo').value;
    const inputRaca = document.getElementById('raca').value;
    const inputVivo = document.getElementById('vivo').checked;
    const inputImagem = document.getElementById('imagem').value;

    const personagem = {
        id: inputId,
        nome: inputNome,
        universo: inputUniverso,
        raca: inputRaca,
        vivo: inputVivo,
        imagem: inputImagem
    }

    if (inputId == '') {
        await addPersonagem(personagem);
    } else {
        await alterarPersonagem(personagem);
    }


    fecharFormulario();
    carregarTodos();
}

async function addPersonagem(personagem) {
    const respostaApi = await fetch(`http://localhost:8080/personagem/novo`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(personagem)
    });
    return await respostaApi.json();
}

async function alterarPersonagem(personagem) {
    const respostaApi = await fetch(`http://localhost:8080/personagem/alterar`, {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(personagem)
    });
    return await respostaApi.json();
}


function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('universo').value = '';
    document.getElementById('raca').value = '';
    document.getElementById('vivo').checked = true;
    document.getElementById('imagem').value = '';
}

async function excluir(id) {
    const respostaApi = await fetch(`http://localhost:8080/personagem/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json' }
    });
    const isExcluido = await respostaApi.json();

    if (isExcluido) {
        alert('Personagem excluído com sucesso!');
    } else {
        alert('Problemas ao excluir personagem...');
    }

    carregarTodos()
}

async function carregarPersonagem(id) {

    const respostaApi = await fetch(`http://localhost:8080/personagem/${id}`);
    const personagem = await respostaApi.json();

    abrirFormulario();
    document.getElementById('id').value = personagem.id;
    document.getElementById('nome').value = personagem.nome;
    document.getElementById('universo').value = personagem.universo;
    document.getElementById('raca').value = personagem.raca;
    document.getElementById('vivo').checked = personagem.vivo;
    document.getElementById('imagem').value = personagem.imagem;
}

