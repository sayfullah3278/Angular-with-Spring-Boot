import { Admission } from "./admission.model";
import { BadeManage } from "./badeManage.model";
import { Doctor } from "./doctor.model";

export class Discharge {
    dischargeId!: number;
    name?: string;
    age?: number;
    admissiondate?: string; // Use string type for dates in TypeScript to ensure compatibility with JSON
    dischargeDate?: string;
    admitade_dayse?: number;
    dischargeSummary?: string;
    admission?:{
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
    badeManage?:BadeManage;
    };
    
  }
  
  