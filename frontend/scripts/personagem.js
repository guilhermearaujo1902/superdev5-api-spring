function abrirFormulario() {
    limparCampos();
    const formulario = document.getElementById('formulario');
    formulario.classList.add('visivel');
}

function fecharFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.classList.remove('visivel');
}

async function carregarTodos() {
    const respostaApi = await fetch('http://localhost:8080/personagem/todos');
    const personagemList = await respostaApi.json();

    if (personagemList.length > 0) {
        const divPersonagemList = document.getElementById('personagemList');
        divPersonagemList.innerHTML = '';

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
                        <button class="btn btn-success btn-alterar">Alterar</button>
                        <button class="btn btn-cancel btn-excluir">Excluir</button>
                    </div>
                </div>
            `;
        }
    }
}

carregarTodos();

async function salvar() {

    const inputNome = document.getElementById('nome').value;
    const inputUniverso = document.getElementById('universo').value;
    const inputRaca = document.getElementById('raca').value;
    const inputVivo = document.getElementById('vivo').checked;
    const inputImagem = document.getElementById('imagem').value;

    const personagem = {
        nome: inputNome,
        universo: inputUniverso,
        raca: inputRaca,
        vivo: inputVivo,
        imagem: inputImagem
    }
    
    const respostaApi = await fetch(`http://localhost:8080/personagem/novo`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(personagem)
    });
    const novoPersonagem = await respostaApi.json();

    console.log(novoPersonagem);
    fecharFormulario();
    carregarTodos();
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('universo').value = '';
    document.getElementById('raca').value = '';
    document.getElementById('vivo').checked = true;
    document.getElementById('imagem').value = '';
}


// EXERCÍCIO
// 1 Mapear os inputs com as outras propriedades faltantes e enviar para o backend
// 2 Renderizar os personagens em forma de CARD na tela

// DESAFIO
// Cadastrar a url da imagem para o personagem e exibir no card
