package com.superdev.api.controller;

import com.superdev.api.model.Personagem;
import com.superdev.api.service.PersonagemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/personagem")
@CrossOrigin(origins = "*")
public class PersonagemController {

    private PersonagemService service;

    public PersonagemController(PersonagemService service){
        this.service = service;
    }

    @GetMapping(value = "/todos")
    public List<Personagem> obterTodosPersonagens() {
        return service.obterTodosPersonagens();
    }

    @GetMapping(value = "/{id}")
    public Personagem obterPorId(@PathVariable int id) {
        return this.service.obterPorId(id);
    }

    @PostMapping(value = "/novo")
    public Personagem addPersonagem(@RequestBody Personagem personagem) {
        return service.addPersonagem(personagem);
    }

    @DeleteMapping(value = "/{id}")
    public boolean delete(@PathVariable int id) {
        return this.service.delete(id);
    }

    @PutMapping(value = "/alterar")
    public Personagem alterarPersonagem(@RequestBody Personagem personagemAtual) {
        return this.service.alterarPersonagem(personagemAtual);
    }

}
