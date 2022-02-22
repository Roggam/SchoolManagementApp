package com.example.SchoolManagement.controller;

import com.example.SchoolManagement.model.Student;
import com.example.SchoolManagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
   private StudentRepository studentRepository;

    @PostMapping("/create")
    private void createStudent(@RequestBody Student student){
        studentRepository.save(student);

    }

    @GetMapping("/list")
    private List<Student> findList(){
        return studentRepository.findAll();
    }
}
