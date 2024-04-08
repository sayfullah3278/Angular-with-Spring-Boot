
import { DoctorService } from '../../service/doctor-service.service';
import { Doctor } from '../../model/doctor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  selectedDoctor: Doctor | null = null;
  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (data: Doctor[]) => this.doctors = data,
      (error) => console.error(error)
    );
  }

  saveDoctor(doctor: Doctor): void {
    this.doctorService.addDoctor(doctor).subscribe(
      (data: Doctor) => {
        console.log('Doctor saved:', data);
        this.loadDoctors(); // Refresh the list
      },
      (error) => console.error(error)
    );
  }

  updateDoctor(doctor: Doctor): void {
    if (doctor && doctor.doctorId) {
      this.doctorService.updateDoctor(doctor).subscribe(
        (data: Doctor) => {
          console.log('Doctor updated:', data);
          this.loadDoctors(); // Refresh the list
        },
        // (error) => console.error(error)
      );
    }
  }

  deleteDoctor(doctorId: number): void {
    this.doctorService.deleteDoctor(doctorId).subscribe(
      () => {
        console.log('Doctor deleted:', doctorId);
        this.loadDoctors(); // Refresh the list
      },
      (error) => console.error(error)
    );
  }

  selectDoctor(doctor: Doctor): void {
    this.selectedDoctor = doctor;
  }

  clearSelection(): void {
    this.selectedDoctor = null;
  }

}
