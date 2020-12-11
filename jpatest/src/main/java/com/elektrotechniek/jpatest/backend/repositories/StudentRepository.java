package com.elektrotechniek.jpatest.backend.repositories;

import com.elektrotechniek.jpatest.backend.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
