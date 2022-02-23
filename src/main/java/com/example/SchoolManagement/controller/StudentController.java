package com.example.SchoolManagement.controller;

import com.example.SchoolManagement.model.Student;
import com.example.SchoolManagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class StudentController {

    @Autowired
   private StudentRepository studentRepository;

    @PostMapping(value = "/create")
    public ResponseEntity<Student> create(@RequestBody Student student) {
        return new ResponseEntity<>(studentRepository.save(student), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/delete/{id}")
    private void deleteStudent(@PathVariable Long id){
       studentRepository.deleteById(id);
    }

    @GetMapping(value = "/list")
    private List<Student> listStudent(){
        return studentRepository.findAll();
    }


//    @PutMapping("/update/{id}")
//    private ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student student) {
//        Student updatedStudent = studentRepository.save(student);
//        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
//
//    }
}
