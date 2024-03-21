import { Admission } from "./admission.model";

export class Discharge {
    dischargeId!: number;
    name?: string;
    age?: number;
    admissiondate?: string; // Use string type for dates in TypeScript to ensure compatibility with JSON
    dischargeDate?: string;
    admitade_dayse?: number;
    dischargeSummary?: string;
    admission?:{
      id?:number;
    };
    
  }
  
  