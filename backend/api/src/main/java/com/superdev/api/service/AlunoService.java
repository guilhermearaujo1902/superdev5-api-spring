package com.superdev.api.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlunoService {

    // Simular o armazenamento do Banco de Dados
    private List<String> alunoList = new ArrayList<>();

    // Retornar todos os elementos da lista
    public List<String> getAll() {
        return this.alunoList;
    }

    // Adicionar um novo elemento à lista
    public String insert(String novoAluno) {

        if (this.alunoList.contains(novoAluno)) {
            return "" +
                    "<h2>Erro ao cadastrar aluno</h2>" +
                    "<p>" + novoAluno +" já existe dentro da lista</p>";
        } else {
            this.alunoList.add(novoAluno);
            return "" +
                    "<h2>Sucesso!</h2>" +
                    "<p>" + novoAluno +" foi inserido na lista</p>";
        }

    }

}
