package com.elektrotechniek.jpatest.backend.exceptions;

public class StudentNotFoundException extends RuntimeException{
    public StudentNotFoundException(Integer id){
        super("Could not find Student with id: " + id);
    }
}
