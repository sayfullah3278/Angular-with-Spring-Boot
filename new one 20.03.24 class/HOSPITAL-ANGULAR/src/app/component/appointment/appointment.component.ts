import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment.model';
import { AppointmentService } from '../../service/appointment.service';
import { DoctorService } from '../../service/doctor-service.service';
import { Doctor } from '../../model/doctor.model';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  doctors: Doctor[] = [];
  selectedAppointment: Appointment = new Appointment();
  isNewAppointment = false;
  doctorDepartments: string[] = [];

  constructor(private appointmentService: AppointmentService, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getAppointments();
    this.getDoctors();
    this.createAppointment();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(doctors => {
        this.doctors = doctors;
        this.initializeDoctorDepartments();
      });
  }

  initializeDoctorDepartments(): void {
    this.doctorDepartments = Array.from(new Set(this.doctors.map(doctor => doctor.department)));
  }
 
  filterDoctorsByDepartment(department: string): Doctor[] {
    return this.doctors.filter(doctor => doctor.department === department);
  }

  getAppointments(): void {
    this.appointmentService.getAllAppointments()
      .subscribe(appointments => this.appointments = appointments);
  }

  onSelect(appointment: Appointment): void {
    this.selectedAppointment = appointment;
    this.isNewAppointment = false;
  }

  createAppointment(): void {
    this.selectedAppointment = new Appointment();
    this.isNewAppointment = true;
  }

  saveAppointment(): void {
    if (this.isNewAppointment) {
      this.appointmentService.addAppointment(this.selectedAppointment)
        .subscribe(() => {
          this.getAppointments();
        });
    } else {
      this.appointmentService.updateAppointment(this.selectedAppointment.appointment_id!, this.selectedAppointment)
        .subscribe(() => {
          this.getAppointments();
        });
    }
  }

  // deleteAppointment(appointment: Appointment): void {
  //   this.appointmentService.deleteAppointment(appointment.appointment_id!)
  //     .subscribe(() => {
  //       this.getAppointments();
  //     });
  // }
  // deleteAppointment(appointmentId: number): void {
  //   if (appointmentId == undefined) {
  //     this.appointmentService.deleteAppointment(appointmentId)
  //       .subscribe(() => {
  //         this.getAppointments();
  //       });
  //   } else {
  //     // Handle the case where appointmentId is undefined
  //     console.error("Invalid appointment ID");
  //   }
  // }
  // deleteAppointment(appointmentId: number | undefined): void {
  //   if (appointmentId !== undefined) {
  //     this.appointmentService.deleteAppointment(appointmentId)
  //       .subscribe(() => {
  //         this.getAppointments();
  //       });
  //   } else {
  //     console.error("Invalid appointment ID");
  //   }
  // }

  // deleteAppointment(row:any){
  //   this.appointmentService.deleteAppointment(row.appointment_id).subscribe(
  //     res=>{
  //       console.log(res);
  //       alert("Appointment Deleted")
  //       this.getAppointments();
      
  //     },
  //     err=>{
  //       alert("Data not Deleted")
  //     })
  // }

  deleteAppointment(row: any) {
    this.appointmentService.deleteAppointment(row.appointment_id).subscribe(
      res => {
        console.log(res);
        alert("Appointment Deleted");
        // Remove the deleted appointment from the list
        this.appointments = this.appointments.filter(appointment => appointment.appointment_id !== row.appointment_id);
      },
      err => {
        alert("Data not Deleted");
      }
    );
  }
  
}
