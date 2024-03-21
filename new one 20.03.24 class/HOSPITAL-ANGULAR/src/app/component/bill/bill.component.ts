import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Discharge } from '../../model/discharge.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent implements OnInit {
  bills: Bill[] = [];
  selectedBill!: Bill;
  isNewBill!: boolean;
  adDate:any
  billForm!: FormGroup;

  discharge: Discharge = new Discharge();
  // admition_date:string=''
  // discharg_date:string=''


  constructor(private billService: BillService, private fb: FormBuilder) { }




  // generateBill(dischargeInfo: any): void {
  //   this.billService.generateBillFromDischarge(dischargeInfo)
  //     .subscribe(
  //       bill => {
  //         console.log('Generated bill:', bill);
  //         // Handle the generated bill here (e.g., display it to the user)
  //       },
  //       error => {
  //         console.error('Error generating bill:', error);
  //         // Handle errors here
  //       }
  //     );
  // }


  generateBill(discharge: Discharge): void {
    this.billService.generateBillFromDischarge(discharge).subscribe(
      (bill: Bill) => {
        // Handle the generated bill
        console.log('Generated Bill:', bill);
      },
      (error) => {
        // Handle error
        console.error('Error:', error);
      }
    );
  }



  ngOnInit(): void {
    this.isNewBill = false;
    this.selectedBill = new Bill(0, '', '', '', '', 0, 0, 0, 0, 0, '');
    this.loadBills();
    this.billForm = this.fb.group({
      passent_name: ['', Validators.required],
      age: ['', Validators.required],
      admition_date: ['', Validators.required],
      discharg_date: ['', Validators.required],
      admitedDays: ['', Validators.required],
      daily_cost: ['', Validators.required],
      total_amount: ['', Validators.required],
      paid_amount: ['', Validators.required],
      due_amount: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  loadBills(): void {
    this.billService.getBills().subscribe(bills => {
      this.bills = bills;
    });
  }

  selectBill(bill: Bill): void {
    this.isNewBill = false;
    this.selectedBill = bill;
  }

  newBill(): void {
    this.isNewBill = true;
    this.selectedBill = new Bill(0, '', '', '', '', 0, 0, 0, 0, 0, '');
  }

  saveBill(): void {
    if (this.isNewBill) {
      this.billService.createBill(this.selectedBill).subscribe(bill => {
        this.bills.push(bill);
        this.isNewBill = false;
      });
    } else {
      this.billService.updateBill(this.selectedBill.bill_id, this.selectedBill).subscribe(bill => {
        const index = this.bills.findIndex(b => b.bill_id === bill.bill_id);
        if (index !== -1) {
          this.bills[index] = bill;
        }
      });
    }
  }

  deleteBill(billId: number): void {
    this.billService.deleteBill(billId).subscribe(() => {
      this.bills = this.bills.filter(b => b.bill_id !== billId);
    });
  }

  // calculate(){
  //   const startDate=new Date(this.admition_date);
  //   const endDate=new Date(this.selectedBill.discharg_date);
  //   console.log(startDate);
  //   console.log(endDate);

  //   // Convert both dates to UTC
  // const startUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  // const endUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  // // Calculate the difference in milliseconds
  // const differenceInMs = Math.abs(endUTC - startUTC);

  // // Convert the difference from milliseconds to days
  // const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  // console.log(differenceInDays.toString());
    
  // }

  // Fatema appu
  // calculate(): void {
  //   // Check if admission date and discharge date are provided
  //   if (!this.selectedBill.admition_date || !this.selectedBill.discharg_date) {
  //     console.error('Admission date or discharge date is missing.');
  //     return;
  //   }
  
  //   // Parse admission date and discharge date strings into Date objects
  //   const startDate = new Date(this.admition_date);
  //   const endDate = new Date(this.selectedBill.discharg_date);
  
  //   // Check if dates are valid
  //   if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
  //     console.error('Invalid date format.');
  //     return;
  //   }
  
  //   // Calculate the difference in milliseconds
  //   const differenceInMs = Math.abs(endDate.getTime() - startDate.getTime());
  
  //   // Convert the difference from milliseconds to days
  //   const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  
  //   // Log the difference in days to the console
  //   console.log('Difference in days:', differenceInDays);
  // }

//  <-- Pdf start-- > 

@ViewChild('printableArea') printableArea!: ElementRef;

  printDiv(): void {
    const printContents = this.printableArea.nativeElement.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
//  <-- Pdf End-- > 
// <calculat>

calculate() {
  // calculate the admitted days, total amount, and due amount based on the input values
  let adDate = new Date(this.billForm.value.admition_date);
  let dcDate = new Date(this.billForm.value.discharg_date);
  let cost = this.billForm.value.daily_cost;
  let days = Math.round((dcDate.getTime() - adDate.getTime()) / (1000 * 3600 * 24));
  console.log(" days " + days)
  this.billForm.controls['admitedDays'].setValue(days);
  let result= days * cost;
  this.billForm.controls['total_amount'].setValue(result)
  this.billForm.controls['due_amount'].setValue(result)
  };
  dueAmount(){
   let total= this.billForm.value.total_amount;
   let paid = this.billForm.value.paid_amount
  let result:number= parseFloat(total) - parseFloat(paid); 
  this.billForm.controls['due_amount'].setValue(result) ;
}
// <calculat>

  
}
