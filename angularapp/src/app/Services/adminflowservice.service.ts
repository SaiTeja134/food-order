
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Table } from '../models/table';

@Injectable({
  providedIn: 'root'
})
export class AdminflowserviceService {

  private readonly environment = {
    baseUrl: 'http://localhost:3000'
  };

  constructor(private http: HttpClient) { }

  sendemail = new BehaviorSubject<string>("")
  selectTableNotoOrderFood = new BehaviorSubject<string>("")
  sendmailtoOtp(data: string) {
    this.sendemail.next(data);
  }
  tableNo(data: string) {
    this.selectTableNotoOrderFood.next(data)
  }
  gettableNo() {
    return this.selectTableNotoOrderFood.asObservable();
  }
  loggedIn() {
    return !!localStorage.getItem('email');
  }
  login(data: any) {
    return this.http.post<{
      error: boolean,
      message: string,
      role: string,
      email: string,
      user: any,
      token: string
    }>(`${this.environment.baseUrl}/user/login`, data)
  }
  register(data: any) {
    return this.http.post<{
      error: boolean,
      message: string
    }>(`${this.environment.baseUrl}/user/register`, data)
  }

  resetPassword(newPassword:string,token:string):Observable<void>{
    return this.http.post<void>(`${this.environment.baseUrl}/user/reset-password`,{newPassword,token})
  }

  verifyotp(data: any) {
    return this.http.post<{
      error: boolean,
      message: string,
      role: string
    }>(`${this.environment.baseUrl}/user/verifyOTP`, data)
  }
  verifymail(data: any) {
    return this.http.post<{
      error: Boolean,
      message: string
    }>(`${this.environment.baseUrl}/user/verifyEmail`, data)
  }

  selectTable() {
    return this.http.get<{
      error: boolean
      message: string
      data: any
    }>(`${this.environment.baseUrl}/restaurant/tables`)
  }
  getPayment() {
    return this.http.get<{
      error: boolean
      message: string
      data: any
    }>(`${this.environment.baseUrl}/restaurant/getAllPayments`)
  }
  getPaymentByEmail(data: any) {
    return this.http.post<{
      error: boolean
      message: string
      data: any
    }>(`${this.environment.baseUrl}/restaurant/getPaymentByEmail`, {
      email: data
    })
  }
  forgotPassword(data: any) {
    return this.http.post<{
      error: Boolean
      message: string

    }>(`${this.environment.baseUrl}/user/forgot-password`, data)
  }
  editTable(data: any) {
    return this.http.patch<{
      error: boolean
      message: string
      data: any
    }>(`${this.environment.baseUrl}/restaurant/table/editStatus`, data)
  }

  getAllUsers() {
    return this.http.get<{
      error: boolean
      message: string
      data: any
    }>(`${this.environment.baseUrl}/restaurant/getAllUsers`)
  }


  getAllMenuItems() {
    return this.http.get<{
      error: boolean
      message: string
      data: any
    }>(`${this.environment.baseUrl}/restaurant/getAllMenu`)
  }

  getAllTables(): Observable<{ success: boolean; data: any }> {
    return this.http.get<{ success: boolean; data: any }>(
      `${this.environment.baseUrl}/restaurant/tables`
    );
  }

  addTable(tableData: any): Observable<{ success: boolean; data: Table }> {
    return this.http.post<{ success: boolean; data: Table }>(
      `${this.environment.baseUrl}/restaurant/tables`,
      tableData
    );
  }

  updateTableStatus(tableId: string, updateData: any): Observable<{ success: boolean; data: Table }> {
    //console.log(updateData)
    return this.http.patch<{ success: boolean; data: Table }>(
      `${this.environment.baseUrl}/restaurant/tables/${tableId}/status`,
      updateData
    );
  }

  bookTable(tableId: string, bookingData: any): Observable<{ success: boolean; data: Table }> {
    return this.http.patch<{ success: boolean; data: Table }>(
      `${this.environment.baseUrl}/restaurant/tables/${tableId}/book`,
      bookingData
    )
    // return this.updateTableStatus(tableId, { 
    //   ...bookingData, 
    //   booked: true 
    // });
  }

  getTableById(tableId: string): Observable<{ success: boolean; data: Table }> {
    return this.http.get<{ success: boolean; data: Table }>(
      `${this.environment.baseUrl}/restaurant/tables/${tableId}`
    );
  }

  deleteTable(tableId: string): Observable<{ success: boolean; message: string }> {
    return this.http.delete<{ success: boolean; message: string }>(
      `${this.environment.baseUrl}/restaurant/tables/${tableId}`
    );
  }
}