export class Doctor {
  doctor_id: number;
  doctorName: string;
  phone: string;
  department: string;
  specialization: string;
  qualification: string;
  experience: string;
  joiningDate: Date;
  doctorFee: number;

  constructor(
    doctor_id: number = 0,
    doctorFee: number = 0,
    doctorName: string = '',
    phone: string = '',
    department: string = '',
    specialization: string = '',
    qualification: string = '',
    experience: string = '',
    joiningDate: Date = new Date()
  ) {
    this.doctor_id = doctor_id;
    this.doctorFee = doctorFee;
    this.doctorName = doctorName;
    this.phone = phone;
    this.department = department;
    this.specialization = specialization;
    this.qualification = qualification;
    this.experience = experience;
    this.joiningDate = joiningDate;
  }
}
