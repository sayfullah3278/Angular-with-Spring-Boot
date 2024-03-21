import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestCart } from '../model/testCard.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestCartServiceService {

  private baseUrl = 'http://localhost:8088/api'; // Replace this with your backend API URL

  constructor(private http: HttpClient) { }

  // Get all test carts
  getAllTestCarts(): Observable<TestCart[]> {
    return this.http.get<TestCart[]>(`${this.baseUrl}/testcard`);
  }

  // Get test cart by ID
  getTestCartById(id: number): Observable<TestCart> {
    return this.http.get<TestCart>(`${this.baseUrl}/testcard/${id}`);
  }

  // Create a new test cart
  createTestCart(testCart: TestCart): Observable<TestCart> {
    return this.http.post<TestCart>(`${this.baseUrl}/testcard`, testCart);
  }

  // Update an existing test cart
  updateTestCart(id: number, testCart: TestCart): Observable<TestCart> {
    return this.http.put<TestCart>(`${this.baseUrl}/testcard/${id}`, testCart);
  }

  // Delete a test cart
  deleteTestCart(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/testcard/${id}`);
  }
}
