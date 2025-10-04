const HOST = 'http://localhost:8080';

async function getAlunos() {

    const respostaAPI = await fetch(`${HOST}/aluno`);
    const alunoList = await respostaAPI.json();

    const divAlunoList = document.getElementById('alunoList');

    if (alunoList.length > 0) {
        divAlunoList.innerHTML = alunoList;
    } else {
        divAlunoList.innerHTML = '<p>Nenhum registro de aluno encontrado!</p>';
    }


}

getAlunos();

async function adicionarAluno() {

    const aluno = document.getElementById('aluno').value;

    const response = await fetch(`${HOST}/aluno/${aluno}`);
    const mensagemCadastro = await response.json();

    alert(mensagemCadastro);
    getAlunos();

}