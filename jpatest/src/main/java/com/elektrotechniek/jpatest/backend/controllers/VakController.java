package com.elektrotechniek.jpatest.backend.controllers;

import com.elektrotechniek.jpatest.backend.Vak;
import com.elektrotechniek.jpatest.backend.repositories.VakRepository;
import com.elektrotechniek.jpatest.backend.exceptions.StudentNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VakController {
    private final VakRepository vakRepository;

    public VakController(VakRepository vakRepository) {
        this.vakRepository = vakRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/vak")
    List<Vak> allVak(){
        return vakRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/vak/{id}")
    Vak oneVak(@PathVariable Integer id){
        return vakRepository.findById(id).
                orElseThrow(()-> new StudentNotFoundException(id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/vak")
    Vak newVak(@RequestBody Vak newVak){
        return vakRepository.save(newVak);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/vak/{id}")
    Vak editVak(@RequestBody Vak newVak, @PathVariable Integer id){
        return vakRepository.findById(id).map(
                vak-> {
                    vak.setVak_naam(newVak.getVak_naam());
                    vak.setSemester(newVak.getSemester());
                    vak.setStudiepunten(newVak.getStudiepunten());
                    vak.setVak_orientatie(newVak.getVak_orientatie());
                    return vakRepository.save(vak);
                }).orElseGet(() -> {
            newVak.setIdvak(id);
            return vakRepository.save(newVak);
        });
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("vak/{id}")
    void deleteVak(@PathVariable Integer id){
        vakRepository.deleteById(id);
    }
}
