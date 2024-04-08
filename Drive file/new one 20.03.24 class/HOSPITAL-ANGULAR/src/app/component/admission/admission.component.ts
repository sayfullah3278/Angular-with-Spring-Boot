import { Component, OnInit } from '@angular/core';
import { Admission } from '../../model/admission.model';
import { AdmissionService } from '../../service/admission.service';
import { DoctorService } from '../../service/doctor-service.service';
import { Doctor } from '../../model/doctor.model';
import { BademanageService } from '../../service/bademanage.service';
import { BadeManage } from '../../model/badeManage.model';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent implements OnInit {
  admissions: Admission[] = [];
  doctors: Doctor[] = [];
  bed: BadeManage[] = [];
  selectedAdmission: Admission = new Admission();


  isNewAdmission = false;
  doctorDepartments: string[] = [];


  constructor(private admissionService: AdmissionService, private doctorService: DoctorService, private bedserv: BademanageService) { }

  ngOnInit(): void {
    this.getAdmissions();
    this.getDoctor();
    this.getBed();
  }
  getDoctor(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => {
        this.doctors = doctors;
        this.initializeDoctorDepartments();
      });
  }
  

  // Initialize doctor departments array with unique department values
  initializeDoctorDepartments(): void {
    this.doctorDepartments = Array.from(new Set(this.doctors.map(doctor => doctor.department)));
  }

  // Filter doctors by department
  filterDoctorsByDepartment(department: string): Doctor[] {
    return this.doctors.filter(doctor => doctor.department === department);
  }

  getBed(): void {
    this.bedserv.getAllBeds()
      .subscribe(res => {
        this.bed = res;

      });
  }



  createAdmission(): void {
    // Initialize a new Admission object
    this.selectedAdmission = new Admission();
    this.isNewAdmission = true;
  }

  getAdmissions(): void {
    this.admissionService.getAllAdmissions()
      .subscribe(admissions => this.admissions = admissions);
  }

  onSelect(admission: Admission): void {
    this.selectedAdmission = admission;
    this.isNewAdmission = false;
  }

  addAdmission(): void {
    this.selectedAdmission = new Admission();
    this.isNewAdmission = true;
  }

  saveAdmission(): void {
    if (this.isNewAdmission) {
      this.admissionService.addAdmission(this.selectedAdmission)
        .subscribe(() => {
          this.getAdmissions();
        });
    } else {
      this.admissionService.updateAdmission(this.selectedAdmission.admissionId!, this.selectedAdmission)
        .subscribe(() => {
          this.getAdmissions();
        });
    }
  }

  deleteAdmission(admission: Admission): void {
    this.admissionService.deleteAdmission(admission.admissionId!)
      .subscribe(() => {
        this.getAdmissions();
      });
  }


}
