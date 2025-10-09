function abrirFormulario() {
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
            divPersonagemList.innerHTML += `<p>${personagem.id} - ${personagem.nome}</p>`;
        }
    }
}

carregarTodos();

async function salvar() {

    const inputNome = document.getElementById('nome').value;

    const personagem = {
        nome: inputNome,
        vivo: false
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


// EXERCÍCIO
// 1 Mapear os inputs com as outras propriedades faltantes e enviar para o backend
// 2 Renderizar os personagens em forma de CARD na tela

// DESAFIO
// Cadastrar a url da imagem para o personagem e exibir no card
