import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../model/discharge.model';
import { DischargeService } from '../../service/discharge.service';
import { Admission } from '../../model/admission.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-discharge',
  templateUrl: './discharge.component.html',
  styleUrls: ['./discharge.component.css']
})
export class DischargeComponent implements OnInit {
  discharges: Discharge[] = [];
  selectedDischarge: Discharge | null = null;
  admissions: Admission[] = [];
  admissionId!: string;

  constructor(private dischargeService: DischargeService) { }

  ngOnInit(): void {
    this.getAllDischarges();
  }

  getAllDischarges(): void {
    this.dischargeService.getAllDischarges().subscribe(
      (data: Discharge[]) => this.discharges = data,
      (error) => console.error(error)
    );
  }

  onSelect(discharge: Discharge): void {
    this.selectedDischarge = discharge;
  }

  SaveDischarges(discharge: Discharge): void {
    this.dischargeService.createDischarge(discharge).subscribe(
      (data: Discharge) => {
        console.log("Discharge Saved:", data);
        this.getAllDischarges();
      },
      (error) => console.error("Error saving discharge:", error)
    );
  }

  updateDoctor(discharge: Discharge): void {
    if (discharge && discharge.dischargeId) {
      this.dischargeService.updateDischarge(discharge.dischargeId, discharge).subscribe(
        (data: Discharge) => {
          console.log('Doctor updated:', data);
          this.getAllDischarges(); // Refresh the list
        },
        (error) => console.error(error)
      );
    }
  }

  onDelete(id: number): void {
    this.dischargeService.deleteDischarge(id).subscribe(
      () => {
        console.log('Discharge deleted');
        this.getAllDischarges();
      },
      error => console.error(error)
    );
  }

  // private convertAdmissionToDischarge(admission: Admission): Observable<Discharge> {
  //   return this.dischargeService.getAdmissionToDischarge(admission.id).pipe(
  //     map((admissionResponse: Admission[]) => {
  //       const discharge: Discharge = {
  //         dischargeId: admission.id,
  //         patientName: admission.patientName,
  //         diagnosis: admission.diagnosis,
  //         // Map other properties as needed
  //       };
  //       return discharge;
  //     })
  //   );
  // }
  // private convertAdmissionToDischarge(admission: Admission): Observable<Discharge> {
  //   return this.dischargeService.getAdmissionToDischarge().pipe(
  //     map((admissionResponse: Admission[]) => {
  //       const discharge: Discharge ={
  //         dischargeId:undefined,
  //         name:'',
  //       };
  //       return discharge;
  //     })
  //   );
  // }

  dischargePatient(): void {
    this.dischargeService.dischargePatient(this.admissionId)
      .subscribe(
        response => {
          console.log(response); // Output success message
          // Handle success response
          this.getAllDischarges();
        },
        error => {
          console.error(error); // Output error message
          // Handle error response
          this.getAllDischarges();
        }
      );
  }


}
