package com.syfullah.HMSHOSPITALMANAGEMENT.service;


import com.syfullah.HMSHOSPITALMANAGEMENT.entity.Employee;
import com.syfullah.HMSHOSPITALMANAGEMENT.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    // Create operation
    public Employee createEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    // Read operation
    public Employee getEmployeeById(int employee_id) {
        Optional<Employee> employeeOptional = employeeRepo.findById(employee_id);
        return employeeOptional.orElse(null);
    }

    // Update operation
    public Employee updateEmployee(int employee_id, Employee updatedEmployee) {
        Optional<Employee> employeeOptional = employeeRepo.findById(employee_id);
        if (employeeOptional.isPresent()) {
            Employee existingEmployee = employeeOptional.get();
            existingEmployee.setFull_name(updatedEmployee.getFull_name());
            existingEmployee.setFather_name(updatedEmployee.getFather_name());
            existingEmployee.setEmail(updatedEmployee.getEmail());
            existingEmployee.setDob(updatedEmployee.getDob());
            existingEmployee.setAddress(updatedEmployee.getAddress());
            existingEmployee.setContact(updatedEmployee.getContact());
            existingEmployee.setGender(updatedEmployee.getGender());
            existingEmployee.setCategory(updatedEmployee.getCategory());
            return employeeRepo.save(existingEmployee);
        }
        return null;
    }

    // Delete operation
    public void deleteEmployee(int employee_id) {
        employeeRepo.deleteById(employee_id);
    }

    // Get all Employee
    public List<Employee> getAllEmployee() {
        return employeeRepo.findAll();
    }

}
