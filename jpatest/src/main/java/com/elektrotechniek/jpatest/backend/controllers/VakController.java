package com.elektrotechniek.jpatest.backend.controllers;

import com.elektrotechniek.jpatest.backend.Vak;
import com.elektrotechniek.jpatest.backend.repositories.VakRepository;
import com.elektrotechniek.jpatest.backend.exceptions.StudentNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VakController {
    private final VakRepository vakRepository;

    public VakController(VakRepository vakRepository) {
        this.vakRepository = vakRepository;
    }

    @GetMapping("/vak")
    List<Vak> allVak(){
        return vakRepository.findAll();
    }

    @GetMapping("/vak/{id}")
    Vak oneVak(@PathVariable Integer id){
        return vakRepository.findById(id).
                orElseThrow(()-> new StudentNotFoundException(id));
    }
}
