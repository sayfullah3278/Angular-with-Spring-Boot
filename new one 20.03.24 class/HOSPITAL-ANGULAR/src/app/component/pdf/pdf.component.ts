import { Component, ElementRef, OnInit, ViewChild, asNativeElements } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmissionService } from '../../service/admission.service';
import { BillService } from '../../service/bill.service';
import { Admission } from '../../model/admission.model';
import { BademanageService } from '../../service/bademanage.service';
import { BadeManage } from '../../model/badeManage.model';
import { Doctor } from '../../model/doctor.model';
import { DoctorService } from '../../service/doctor-service.service';
import { Bill } from '../../model/bill.model';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.css'
})
export class PdfComponent implements OnInit {

  admissionId: any;
  billAdmission: Admission = new Admission();
  bedAdmission: BadeManage = new BadeManage();
  docAdmission: Doctor = new Doctor();
  // bill:Bill = new Bill(0, '', '', '', '', 0, 0, 0, 0, 0, '',0);
  bill:Bill = new Bill();
  constructor(
    private admissionService: AdmissionService,
    private bilserv: BillService,
    private bedserv: BademanageService,
    private docserv: DoctorService,

    private routeA: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.routeA.params.subscribe(param => this.admissionId = param['id']);
    console.log("ad id" + this.admissionId);
    this.getAdmissions();
    this.getBillAdmissions();
    this.getbedDetails();
    this.getdocDetails();
    
    
  }

  getAdmissions(): void {
    this.admissionService.getAdmissionById(this.admissionId)
      .subscribe(admissions => this.billAdmission = admissions);

      // this.getbedDetails();
    // this.getdocDetails();
    console.log(this.billAdmission)
  }
  getBillAdmissions(): void {
    this.bilserv.getBillByadmissionId(this.admissionId)
      .subscribe(billdata => this.bill = billdata);
    console.log(this.bill)
  }
  getbedDetails(): void {
    const bedId = this.billAdmission.badeManage?.bedId;
    if (typeof bedId === 'number') {
      this.bedserv.getBedById(bedId)
        .subscribe(bed => {
          this.bedAdmission = bed;
          // console.log(this.bedAdmission);
        });
    } else {
      console.error('Bed ID is undefined or not a number.');
    }
  }
  getdocDetails(): void {
    // const docId = this.billAdmission.doctorsId?.doctor_id;
    const docId = this.billAdmission.doctorsId?.doctorId;
    if (typeof docId === 'number') {
      this.docserv.getDoctorById(docId)
        .subscribe(doc => {
          this.docAdmission = doc;
          console.log(this.docAdmission);
          this.calculateTotal();
        });
    } else {
      console.error('doc ID is undefined or not a number.');
    }
  }




  @ViewChild('printableArea') printableArea!: ElementRef;

  printDiv(): void {
    const printContents = this.printableArea.nativeElement.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }


  private calculateTotal(): void {
    let days = this.bill.admitedDays;
    let docFee = this.docAdmission.doctorFee;
    let result = days * docFee
    document.getElementById("totalPriceLarge")!.innerHTML = result.toFixed(1);

    let bedfee = this.bill.total_amount
    let result2 = bedfee + result
    document.getElementById("totalmoney")!.innerHTML = result2.toFixed(1);
    console.log("docfee " + result)

    console.log(bedfee)
    
    console.log(docFee)
    
  }

}
