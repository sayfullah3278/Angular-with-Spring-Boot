import { Appointment } from "./appointment.model";
import { Doctor } from "./doctor.model";

export class PatientSarch {
    id?: number;
    name?: string;
    age?: string;
    phone?: string;
    doctorName?: string;
    doctorsId?: Doctor; // Assuming Doctor has an 'id' field
    appointmentsId?: Appointment; // Assuming Appointments has an 'id' field
  
   
  }
  