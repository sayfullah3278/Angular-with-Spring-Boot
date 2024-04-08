import { Admission } from "./admission.model";
import { Doctor } from "./doctor.model";
export class Bill{

  billId?: number;
  passent_name?: string;
    age?: string;
    admition_date?: string;
    discharg_date?: string;
    admitedDays: number=0;
    daily_cost: number=0;
    total_amount: number=0;
    paid_amount: number=0;
    due_amount: number=0;
    paymentMethod?: string;
    admissionId:Admission |undefined;


}

// export class Bill {
//   billId?: number;
//   passent_name?: string;
//     age?: string;
//     admition_date?: string;
//     discharg_date?: string;
//     admitedDays: number;
//     daily_cost: number;
//     total_amount: number;
//     paid_amount: number;
//     due_amount: number;
//     paymentMethod: string;
//     admissionId:number

//     constructor(
//         billId: number,
//         passent_name: string,
//         age: string,
//         admition_date: string,
//         discharg_date: string,
//         admitedDays: number,
//         daily_cost: number,
//         total_amount: number,
//         paid_amount: number,
//         due_amount: number,
//         paymentMethod: string,
//         admissionId:number
//       ) {
//         this.billId = billId;
//         this.passent_name = passent_name;
//         this.age = age;
//         this.admition_date = admition_date;
//         this.discharg_date = discharg_date;
//         this.admitedDays = admitedDays;
//         this.daily_cost = daily_cost;
//         this.total_amount = total_amount;
//         this.paid_amount = paid_amount;
//         this.due_amount = due_amount;
//         this.paymentMethod = paymentMethod;
//         this.admissionId = admissionId
//       }
    
    
// }


// admissionId?:{
//   admission_id: number;
//   name?: string;
//   email?: string;
//   phone?: string;
//   age?: number;
//   sex?: string;
//   bloodGroup?: string;
//   department?: string;
//   doctor?: string;
//   diseaseDescription?: string;
//   admissionDate?: Date;
//   emergencyContactNumber?: string;
//   relationshipWithPatient?: string;
//   doctorsId?: Doctor ;
//   badeManage?:{
//     bedId: number,
//     bedNumber: string,
//     bedCharge: number,
//     bedCatagori: string
//   }  
// }
  

// constructor(
    //   billId: number,
    //   passent_name: string,
    //   age: string,
    //   admition_date: string,
    //   discharg_date: string,
    //   admitedDays: number,
    //   daily_cost: number,
    //   total_amount: number,
    //   paid_amount: number,
    //   due_amount: number,
    //   paymentMethod: string
    // ) {
    //   this.billId = billId;
    //   this.passent_name = passent_name;
    //   this.age = age;
    //   this.admition_date = admition_date;
    //   this.discharg_date = discharg_date;
    //   this.admitedDays = admitedDays;
    //   this.daily_cost = daily_cost;
    //   this.total_amount = total_amount;
    //   this.paid_amount = paid_amount;
    //   this.due_amount = due_amount;
    //   this.paymentMethod = paymentMethod;
    // }