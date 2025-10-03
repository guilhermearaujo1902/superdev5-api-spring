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
    public void insert(String novoAluno) {
        this.alunoList.add(novoAluno);
    }

}
