import { BadeManage } from "./badeManage.model";
import { Doctor } from "./doctor.model";

export class Admission {
    admission_id?: number;
    name?: string;
    email?: string;
    phone?: string;
    age?: number;
    sex?: string;
    bloodGroup?: string;
    department?: string;
    doctor?: string;
    diseaseDescription?: string;
    admissionDate?: Date;
    emergencyContactNumber?: string;
    relationshipWithPatient?: string;
    doctorsId?: Doctor ;
    badeManage?:{
      bedId: number,
      bedNumber: string,
      bedCharge: number,
      bedCatagori: string
  };
   
  }
//   import { Doctor } from './doctor.model';

// export class Appointment {
//   appointment_id?: number;
//   name?: string;
//   email?: string;
//   phone?: string;
//   date?: string;
//   department?: string;
//   doctorName?: string;
//   disease?: string;
//   doctorsId?: Doctor;
// }
