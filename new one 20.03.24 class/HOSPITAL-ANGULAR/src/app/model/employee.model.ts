export class Employee {
    constructor(
      public employee_id: number,
      public full_name: string,
      public father_name: string,
      public email: string,
      public dob: Date,
      public address: string,
      public contact: string,
      public gender: string,
      public category: string
    ) {}
  }