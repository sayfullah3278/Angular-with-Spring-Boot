import { Component, OnInit } from '@angular/core';
import { PatientSarch } from '../../model/pasentsarch.model';
import { PatientsarchService } from '../../service/patientsarch.service';
import { Doctor } from '../../model/doctor.model';
import { DoctorService } from '../../service/doctor-service.service';
import { AppointmentService } from '../../service/appointment.service';
import { Appointment } from '../../model/appointment.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pasentsarch',
  templateUrl: './pasentsarch.component.html',
  styleUrl: './pasentsarch.component.css'
})
export class PasentsarchComponent implements OnInit {
  patientSarches: PatientSarch[] = [];
  selectedPatientSarch: PatientSarch=new PatientSarch();
  doctors: Doctor[]=[];
  isNewAdmission = false;
  doctorDepartments: string[] = [];
  appointments:Appointment[]=[];
  selectedDoctorName!: string;
  doctorName!: string;
  date!: string;
  formattedDate!:any;



  constructor(private patientSarchService: PatientsarchService ,
    private doctorService: DoctorService,
    private appointmentServ:AppointmentService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getDoctor();
    this.getAppointments();
    // this.getPatientSearches();
    this.getAllPatientSarches();
    
  }


  onSubmit():void{
     this.formattedDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.patientSarchService.getAppointmentsByDoctorNameAndDate(this.doctorName, this.formattedDate)
      .subscribe(
      response => {
        // Assign the response to the patientSearchList array
        console.log(response);
        this.patientSarches= response;
        console.log(this.doctorName);
        console.log(this.date);
        console.log(this.patientSarches);
      },
      error => {
        // Handle errors here
        console.error('Error:', error);
      }
    );

  }
    


  getAllPatientSarches(): void {
    this.patientSarchService.getAllPatientSarches().subscribe(
      data => this.patientSarches = data,
      error => console.error(error)
    );
  }

  onSelect(patientSarch: PatientSarch): void {
    this.selectedPatientSarch = patientSarch;
  }

  onSave(patientSarch: PatientSarch): void {
    if (patientSarch.id) {
      this.patientSarchService.updatePatientSarch(patientSarch.id, patientSarch).subscribe(
        data => {
          console.log('PatientSarch updated:', data);
          this.getAllPatientSarches();
        },
        error => console.error(error)
      );
    } else {
      this.patientSarchService.createPatientSarch(patientSarch).subscribe(
        data => {
          console.log('PatientSarch created:', data);
          this.getAllPatientSarches();
        },
        error => console.error(error)
      );
    }
  }

  onDelete(id: number): void {
    this.patientSarchService.deletePatientSarch(id).subscribe(
      () => {
        console.log('PatientSarch deleted');
        this.getAllPatientSarches();
      },
      error => console.error(error)
    );
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

  // getDoctors(): void {
  //   this.doctorService.getDoctors().subscribe(doctors => {
  //     this.doctors = doctors;
  //   });
  // }

  getAppointments(): void {
    this.appointmentServ.getAllAppointments().subscribe((appointments:Appointment[]) => {
      this.appointments =appointments; // Make sure getAppointments() returns an Observable
    });
  }

  // getPatientSearches(): void {
  //   this.patientSearchService.getPatientSearches().subscribe(patientSearches => {
  //     this.getPatientSearches = patientSearches;
  //   });
  // }
}
