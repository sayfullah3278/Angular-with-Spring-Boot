package com.syfullah.HMSHOSPITALMANAGEMENT.controller;

import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Employee;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {


    @Autowired
    EmployeeRepo employeeRepo;


    @GetMapping("/employee")
    public List<Employee> allEmployees(){
        return employeeRepo.findAll();
    }


    @PostMapping("/employee")
    public Employee saveEmployees(@RequestBody Employee employee) {

        return employeeRepo.save(employee);
    }


    @DeleteMapping("/employee/{employeeId}")
    public ResponseEntity<String> delete(@PathVariable("employee_id") int employeeId) {
        boolean exist = employeeRepo.existsById(employeeId);
        if (exist) {
            employeeRepo.deleteById(employeeId);
            return new ResponseEntity<>("employee is delete", HttpStatus.OK);
        }
        return new ResponseEntity<>("employee is not delete", HttpStatus.BAD_REQUEST);
    }



    @PutMapping("/employee/{employeeId}")
    public ResponseEntity<String> update(@PathVariable("employee_id") int employeeId, @RequestBody Employee employee){
        boolean exist=employeeRepo.existsById(employeeId);

        if(exist){
            Employee employee1=employeeRepo.getById(employeeId);
            employee1.setFull_name(employee.getFull_name());
            employee1.setFather_name(employee.getFather_name());
            employee1.setEmail(employee.getEmail());
            employee1.setDob(employee.getDob());
            employee1.setAddress(employee.getAddress());
            employee1.setContact(employee.getContact());
            employee1.setGender(employee.getGender());
            employee1.setCategory(employee.getCategory());
            employeeRepo.save(employee);
            return  new ResponseEntity<>("employee is Updated", HttpStatus.OK);
        }
        return  new ResponseEntity<>("employee is not Updated", HttpStatus.BAD_REQUEST);


    }
}
