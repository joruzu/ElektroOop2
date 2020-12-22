package com.elektrotechniek.jpatest.backend.controllers;

import com.elektrotechniek.jpatest.backend.Student;
import com.elektrotechniek.jpatest.backend.repositories.StudentRepository;
import com.elektrotechniek.jpatest.backend.exceptions.StudentNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/students")
    List<Student> allStudents(@RequestParam(value = "search", required = false, defaultValue = "")
                                      String searchTerm) {
        if (searchTerm.isBlank()) {
            return studentRepository.findAll();
        } else {
            return studentRepository.search(searchTerm);
        }

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/students")
    Student newStudent(@RequestBody Student newStudent){
        return studentRepository.save(newStudent);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/students/{id}")
    Student one(@PathVariable Integer id){
        return studentRepository.findById(id).
                orElseThrow(() -> new StudentNotFoundException(id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/students/{id}")
    Student replaceStudent(@RequestBody Student newStudent, @PathVariable Integer id){
        return studentRepository.findById(id).
                map(student -> {
                    student.setNaam(newStudent.getNaam());
                    student.setAchternaam(newStudent.getAchternaam());
                    student.setAfstudeer_jaar(newStudent.getAfstudeer_jaar());
                    student.setCohort(newStudent.getCohort());
                    student.setEmail(newStudent.getEmail());
                    student.setGeslacht(newStudent.getGeslacht());
                    student.setOrientatie(newStudent.getOrientatie());
                    student.setStudie_status(newStudent.getStudie_status());
                    return studentRepository.save(student);
                }).orElseGet(() -> {
                    newStudent.setStudentennummer(id);
                    return studentRepository.save(newStudent);
                });
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/students/{id}")
    void deleteEmployee(@PathVariable Integer id){
        studentRepository.deleteById(id);
    }
}
