package com.superdev.api.controller;

import com.superdev.api.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/aluno")
public class AlunoController {

    @Autowired
    AlunoService service;

    @GetMapping(value = "")
    public List<String> getAll() {
        return service.getAll();
    }

    // @PathVariable - Usado para mapear uma parte da url do endpoint, transformando
    // em uma variável e recebendo essa variável no parâmetro indicado
    @GetMapping(value = "/{nome}")
    public String insert(@PathVariable String nome) {
        return service.insert(nome);
    }

}
