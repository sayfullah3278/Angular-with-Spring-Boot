import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BadeManage } from '../model/badeManage.model';

@Injectable({
  providedIn: 'root'
})
export class BademanageService {

  private baseUrl='http://localhost:8088/api/beds'

  constructor(private http: HttpClient) { }


  getBedByBedNumber(bedNumber: string): Observable<BadeManage> {
    return this.http.get<BadeManage>(`${this.baseUrl}/bedNumber/${bedNumber}`);
  }

  getAllBeds(): Observable<BadeManage[]> {
    return this.http.get<BadeManage[]>(this.baseUrl);
  }

  getBedById(bedId: number): Observable<BadeManage> {
    return this.http.get<BadeManage>(`${this.baseUrl}/${bedId}`);
  }

  createBed(bed: BadeManage): Observable<BadeManage> {
    return this.http.post<BadeManage>(this.baseUrl, bed);
  }

  updateBed(bedId: number, bed: BadeManage): Observable<BadeManage> {
    return this.http.put<BadeManage>(`${this.baseUrl}/${bedId}`, bed);
  }

  deleteBed(bedId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${bedId}`);
  }
}
