export class Doctor {
  doctorId: number;
  doctorName: string;
  phone: string;
  department: string;
  specialization: string;
  qualification: string;
  experience: string;
  joiningDate: Date;
  doctorFee: number;

  constructor(
    doctorId: number = 0,
    doctorFee: number = 0,
    doctorName: string = '',
    phone: string = '',
    department: string = '',
    specialization: string = '',
    qualification: string = '',
    experience: string = '',
    joiningDate: Date = new Date()
  ) {
    this.doctorId = doctorId;
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
