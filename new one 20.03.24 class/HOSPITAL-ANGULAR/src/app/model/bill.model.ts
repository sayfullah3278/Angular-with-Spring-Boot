export class Bill {
    bill_id: number;
    passent_name: string;
    age: string;
    admition_date: string;
    discharg_date: string;
    admitedDays: number;
    daily_cost: number;
    total_amount: number;
    paid_amount: number;
    due_amount: number;
    paymentMethod: string;
  
    constructor(
      bill_id: number,
      passent_name: string,
      age: string,
      admition_date: string,
      discharg_date: string,
      admitedDays: number,
      daily_cost: number,
      total_amount: number,
      paid_amount: number,
      due_amount: number,
      paymentMethod: string
    ) {
      this.bill_id = bill_id;
      this.passent_name = passent_name;
      this.age = age;
      this.admition_date = admition_date;
      this.discharg_date = discharg_date;
      this.admitedDays = admitedDays;
      this.daily_cost = daily_cost;
      this.total_amount = total_amount;
      this.paid_amount = paid_amount;
      this.due_amount = due_amount;
      this.paymentMethod = paymentMethod;
    }
  }
  