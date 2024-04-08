import { Component, OnInit } from '@angular/core';
import { TestAndPatient } from '../../model/test-patient.model';
import { TestAndPatientService } from '../../service/test-patient.service';

@Component({
  selector: 'app-test-patient',
  templateUrl: './test-patient.component.html',
  styleUrl: './test-patient.component.css'
})
export class TestAndPatientComponent implements OnInit {

  testAndPatients!: TestAndPatient[];

  constructor(private testAndPatientService: TestAndPatientService) { }

  ngOnInit(): void {
    this.getAllTestAndPatients();
  }

  getAllTestAndPatients(): void {
    this.testAndPatientService.getAllTestAndPatient()
      .subscribe(data => {
        this.testAndPatients = data;
      });
  }

  createTestAndPatient(testAndPatient: TestAndPatient): void {
    this.testAndPatientService.createTestAndPatient(testAndPatient)
      .subscribe(() => {
        this.getAllTestAndPatients();
      });
  }

  deleteTestAndPatient(id: number): void {
    this.testAndPatientService.deleteTestAndPatient(id)
      .subscribe(() => {
        this.getAllTestAndPatients();
      });
  }

  updateTestAndPatient(id: number, updatedTestAndPatient: TestAndPatient): void {
    this.testAndPatientService.updateTestAndPatient(id, updatedTestAndPatient)
      .subscribe(() => {
        this.getAllTestAndPatients();
      });
  }
}