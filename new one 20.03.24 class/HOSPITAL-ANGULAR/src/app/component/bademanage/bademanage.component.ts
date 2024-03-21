import { Component, OnInit } from '@angular/core';
import { BadeManage } from '../../model/badeManage.model';
import { BademanageService } from '../../service/bademanage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-bademanage',
  templateUrl: './bademanage.component.html',
  styleUrl: './bademanage.component.css'
})
export class BademanageComponent implements OnInit{

  beds?: BadeManage[];
  bedForm2!: FormGroup;
  bedFormeedit: BadeManage=new BadeManage();

  constructor(private badeManageService: BademanageService,private formBuilder: FormBuilder
    ){}


  ngOnInit(): void {
    this.bedForm();
    this.saveAllBade();
  }

  bedForm(): void {
    this.bedForm2 = this.formBuilder.group({
      bedNumber: ['', Validators.required],
      bedCharge: ['', Validators.required],
      bedCatagori: ['', Validators.required]
    });
  }

  saveAllBade(): void {
    this.badeManageService.getAllBeds().subscribe(
      data => {
        this.beds = data;
      },
      error => {
        console.log('Error fetching beds:', error);
      }
    );
  }
  onSubmit():void{
    if(this.bedForm2.valid){
      const newBed: BadeManage= this.bedForm2.value;
      this.badeManageService.createBed(newBed).subscribe(
        ()=>{
          this.saveAllBade();
          this.bedForm2.reset();
        },
        error => {
          console.log('Error bade is not created:',error);
        }
        
      );
    }
  }

  // updateBed(beadmanag: BadeManage): void {
  //   if (beadmanag && beadmanag.bedId) {
  //     this.badeManageService.updateBed(bedId).subscribe(
  //       (data: BadeManage) => {
  //         console.log('Bade updated:', data);
  //         this.saveAllBade(); // Refresh the list
  //       },
  //       // (error) => console.error(error)
  //     );
  //   }
  // }
  updateBed(bedmanag: BadeManage): void {
    if (bedmanag && bedmanag.bedId) {
      this.badeManageService.updateBed(bedmanag.bedId, bedmanag).subscribe(
        (data: BadeManage) => {
          console.log('Bed updated:', data);
          this.saveAllBade(); // Refresh the list
        },
        (error) => {
          console.error('Error updating bed:', error);
        }
      );
    }
  }
  editBadByid(byRow:any){

    this.bedFormeedit.bedId=byRow.bedId;

    this.bedForm2.controls['bedNumber'].setValue(byRow.bedNumber)
    this.bedForm2.controls['bedCharge'].setValue(byRow.bedCharge)
    this.bedForm2.controls['bedCatagori'].setValue(byRow.bedCatagori)
    

  }
  // onEditById(buyerRow: any) {
  //   this.menuType = false;
  //   this.buyerModel.id = buyerRow.id;
  //   this.buyerForm.controls['organization'].setValue(buyerRow.organization)
  //   this.buyerForm.controls['contactPerson'].setValue(buyerRow.contactPerson)
  //   this.buyerForm.controls['phone'].setValue(buyerRow.phone)
  //   this.buyerForm.controls['email'].setValue(buyerRow.email)
  //   this.buyerForm.controls['address'].setValue(buyerRow.address)
  //   this.buyerForm.controls['country'].setValue(buyerRow.country)
  // }

  deleteBed(bedId: number): void {
    this.badeManageService.deleteBed(bedId).subscribe(
      () => {
        this.saveAllBade();
      },
      error => {
        console.log('Error deleting bed:', error);
      }
    );}

    editBads(){
      if(this.bedForm2.valid){

        this.bedFormeedit.bedNumber= this.bedForm2.value.bedNumber
        this.bedFormeedit.bedCharge= this.bedForm2.value.bedCharge
        this.bedFormeedit.bedCatagori= this.bedForm2.value.bedCatagori


        this.badeManageService.updateBed(this.bedFormeedit.bedId,this.bedFormeedit).subscribe({
          next: res=>{
            console.log("bed updated",res)
            alert("bade Updated.")
            this.saveAllBade();
            this.bedForm2.reset();

            console.log("Inside  bade updated")
          },
          error: er=>{
            console.log(er)
            alert("Data not updated")
          }
        })
      }

      
    }


}
