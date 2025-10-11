package com.superdev.api.service;

import com.superdev.api.model.Personagem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonagemService {

    private List<Personagem> personagemList = new ArrayList<>();
    private int sequenciaId = 1;

    public List<Personagem> obterTodosPersonagens() {
        return this.personagemList;
    }

    public Personagem obterPorId(int id) {
        Personagem personagemEncontrado = null;
        for (Personagem personagem : personagemList) {
            if (personagem.getId() == id) {
                personagemEncontrado = personagem;
            }
        }
        return personagemEncontrado;
    }

    public Personagem addPersonagem(Personagem personagem) {
        personagem.setId(sequenciaId);

        this.personagemList.add(personagem);
        sequenciaId++;

        return personagem;
    }

    public boolean delete(int idExcluir) {
        // Validar se o personagem já existe

        for (Personagem personagem : personagemList) {
            if (personagem.getId() == idExcluir) {
                return this.personagemList.remove(personagem);
            }
        }

        return false;
    }

    public Personagem alterarPersonagem(Personagem personagemAtual) {
        Personagem personagemAntigo = obterPorId(personagemAtual.getId());
        this.personagemList.remove(personagemAntigo);
        this.personagemList.add(personagemAtual);
        return personagemAntigo;
    }

}