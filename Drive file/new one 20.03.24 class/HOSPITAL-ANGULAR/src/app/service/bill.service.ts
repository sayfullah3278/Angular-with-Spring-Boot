import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../model/bill.model';
import { Discharge } from '../model/discharge.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = 'http://localhost:8088/api/bills';

  constructor(private http: HttpClient) { }

  getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.apiUrl);
  }

  getBillById(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}/${id}`);
  }
  getBillByadmissionId(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}/ad/${id}`);
  }

  createBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(this.apiUrl, bill);
  }

  saveBill(bill: Bill, adid:number): Observable<Bill> {
    return this.http.post<Bill>(`${this.apiUrl}/save/${adid}`,bill);
  }

  updateBill(id: number, bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(`${this.apiUrl}/${id}`, bill);
  }

  deleteBill(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // generateBillFromDischarge(dischargeInfo: any): Observable<Bill> {
  //   return this.http.post<Bill>('http://localhost:8088/api/bills/generate', dischargeInfo);
  // }


  generateBillFromDischarge(discharge: Discharge): Observable<Bill> {
    return this.http.post<Bill>("http://localhost:8088/api/bills/generate", discharge);
  }


}
