import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee = {
    employee_id: 0,
    full_name: '',
    father_name: '',
    email: '',
    dob: new Date(),
    address: '',
    contact: '',
    gender: '',
    category: ''
  };
  isEdit = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }
  addOrUpdateEmployee(): void {
    if (this.isEdit) {
      if (this.employee.employee_id !== undefined) {
        this.employeeService.updateEmployee(this.employee.employee_id, this.employee).subscribe(() => {
          this.loadEmployees();
          this.resetForm();
        });
      } else {
        // Handle error or log a message indicating that employee_id is undefined
      }
    } else {
      this.employeeService.createEmployee(this.employee).subscribe(() => {
        this.loadEmployees();
        this.resetForm();
      });
    }
  }

  editEmployee(employee: Employee): void {
    this.employee = { ...employee }; // make a copy to avoid two-way binding issues
    this.isEdit = true;
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

  resetForm(): void {
    this.employee = {
      employee_id: 0,
      full_name: '',
      father_name: '',
      email: '',
      dob: new Date(),
      address: '',
      contact: '',
      gender: '',
      category: ''
    };
    this.isEdit = false;
  }
  
}
