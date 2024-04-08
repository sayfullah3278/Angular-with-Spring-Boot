import { Doctor } from './doctor.model';

export class Appointment {
  
  appointment_id!: number;
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  department?: string;
  doctorName?: string;
  disease?: string;

  doctor?: Doctor;
}
