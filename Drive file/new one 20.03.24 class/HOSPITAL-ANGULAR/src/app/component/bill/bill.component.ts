import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Bill } from '../../model/bill.model';
import { BillService } from '../../service/bill.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Discharge } from '../../model/discharge.model';
import { DischargeService } from '../../service/discharge.service';
import { Console, error } from 'node:console';
import { Admission } from '../../model/admission.model';
import { AdmissionService } from '../../service/admission.service';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Doctor } from '../../model/doctor.model';
import { DoctorService } from '../../service/doctor-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent implements OnInit {
  bills: Bill[] = [];
  admissions: Admission[] = [];
  selectedBill!: Bill;
  
  isNewBill!: boolean;
  adDate:any
  billForm!: FormGroup;
  // to create pdf
  admissionId:any;


  dischargeT:Discharge[]=[];
  docAdmission: Doctor = new Doctor();
  admissionbill:Admission = new Admission();
  discharge: Discharge = new Discharge();
  // admition_date:string=''
  // discharg_date:string=''

  @ViewChild('docfee') docfee?: ElementRef ;
  constructor(private billService: BillService,
    private dischargeserv: DischargeService , 
    private admissionService: AdmissionService,
    private router:Router,
    private docserv: DoctorService,
    private fb: FormBuilder) { }







  getPatientDetails():void{
    let patientName:string| undefined= this.selectedBill.passent_name;
    // console.log(patientName);

    const dischargeDetails:Discharge | undefined=  this.dischargeT.find(res => res.name=== this.selectedBill.passent_name);
    console.log(dischargeDetails);
    
    // this.selectedBill.age=dischargeDetails?.age?.toString();
    this.selectedBill.age = (dischargeDetails?.age ?? '') as string;
    this.selectedBill.admition_date=(dischargeDetails?.admissiondate??'')as string;
    this.selectedBill.discharg_date=(dischargeDetails?.dischargeDate??'')as string;
    this.selectedBill.admitedDays=(dischargeDetails?.admitade_dayse??'')as number;
    this.selectedBill.daily_cost=(dischargeDetails?.admission?.badeManage?.bedCharge??'')as number;
    
    console.log("inside patient details admision id")
    console.log(dischargeDetails?.admission?.admissionId)
  //  console.log((dischargeDetails?.admission?.admission_id??'')as number)
    this.admissionId = (dischargeDetails?.admission?.admissionId)
    if (this.docfee) {
      this.docfee.nativeElement.value = dischargeDetails?.admission?.doctorsId?.doctorFee;
    }
    
    //   console.log("admission id value")
    //   console.log(this.selectedBill.admissionId.admission_id)
    
  }

  
  getAllAdmissionbyId(adId:any){
    this.admissionService.getAdmissionById(adId)
    .subscribe(admissions => this.admissionbill = admissions);
    this.getdocDetails(this.admissionbill);
  }
  findByAdId(adId:number){
    this.router.navigate(['/pdf',adId]);
  }
  getAllAdmission(){
    this.admissionService.getAllAdmissions()
    .subscribe(admissions => this.admissions = admissions);
  }


  getdocDetails(adId:Admission): void {
    // const docId = this.billAdmission.doctorsId?.doctor_id;
    // const docId = this.admissionId.doctorsId?.doctorId;
    const docId = adId;
    if (typeof docId === 'number') {
      this.docserv.getDoctorById(docId)
        .subscribe(doc => {
          this.docAdmission = doc;
          console.log(this.docAdmission);
          if (this.docfee) {
            // this.docfee.nativeElement.value = this.docAdmission.doctorFee;
          }
          // this.docfee.nativeElement.value = this.docAdmission.doctorFee;
        });
    } 
  }

  onChangeSelect(): void {
    // Call the getPatientDetails method
    this.getPatientDetails();
    
  }

  generateBill(discharge: Discharge): void {
    this.billService.generateBillFromDischarge(discharge).subscribe(
      (bill: Bill) => {
        // Handle the generated bill
        // console.log('Generated Bill:', bill);
      },
      (error) => {
        // Handle error
        console.error('Error:', error);
      }
    );
  }



  ngOnInit(): void {
    this.isNewBill = true;
    // this.selectedBill = new Bill(0, '', '', '', '', 0, 0, 0, 0, 0, '',0);;
    this.selectedBill = new Bill();;
    this.loadBills();
    this.getAllDischarge();
    this.getAllAdmission();
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

  getAllDischarge():void{

    this.dischargeserv.getAllDischarges().subscribe(dischargeT=> {
      this.dischargeT=dischargeT;
    });
  }

  selectBill(bill: Bill): void {
    this.isNewBill = false;
    this.selectedBill = bill;
  }

  newBill(): void {
    this.isNewBill = true;
    // this.selectedBill = new Bill(0, '', '', '', '', 0, 0, 0, 0, 0, '',0);;
    this.selectedBill = new Bill();;
  }

  saveBill(): void {
    if (this.isNewBill) {
      // console.log("inside")

      this.billService.createBill(this.selectedBill).subscribe({
        // console.log(this.admissionId)
      // this.billService.saveBill(this.selectedBill,this.admissionId).subscribe({

        next: bill=> {
          this.bills.push(bill);
          this.isNewBill=false;
          alert("New bill created successfully")
          console.log(this.selectedBill);
          // to create pdf
          this.findByAdId(this.admissionId)
        }, error: err=> {console.log(err);
        alert("data not save")}
      })

      // this.billService.createBill(this.selectedBill).subscribe( bill => {
      //   this.bills.push(bill);
      //   this.isNewBill = false;
      //   alert("New bill created successfully ")
      // });
    } 


    // else {
    //   this.billService.updateBill(this.selectedBill.billId, this.selectedBill).subscribe(bill => {
    //     const index = this.bills.findIndex(b => b.billId === bill.billId);
    //     if (index !== -1) {
    //       this.bills[index] = bill;
    //     }
    //   });
    // }
  }
  // this.service.getAllBuyers().subscribe({
  //   next: res => {
  //     this.buyer = res;
  //   },
  //   error: err => {
  //     console.log(err);
  //   }

  deleteBill(billId: number): void {
    this.billService.deleteBill(billId).subscribe(() => {
      this.bills = this.bills.filter(b => b.billId !== billId);
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
  
  let days:number = this.selectedBill.admitedDays;
  let dailybedCharge:number = this.selectedBill.daily_cost
  let doctorFee:number = this.docfee?.nativeElement.value
  console.log("doc fee"+ doctorFee)
  
  if(days && dailybedCharge != null){
    let result= (dailybedCharge*days)+(doctorFee*days);
    this.selectedBill.total_amount = result
    this.selectedBill.due_amount = result
    // console.log("result" + result)
  }
  

  };
  dueAmount(){
   let total= this.selectedBill.total_amount;
   let paid = this.selectedBill.paid_amount;
   
  let result= total - paid; 
  this.selectedBill.due_amount = result;
}
// <calculat>




generatePDF(): void {
  const element = document.getElementById('pdfContent')!;

  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps= pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('bill.pdf');
  });
}

  
}
