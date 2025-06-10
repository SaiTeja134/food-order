import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { User } from '../models/user';

import { jsonratings } from '../models/jsonratings';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly environment = {
    baseUrl: 'http://localhost:3000'
  };

  constructor(private http: HttpClient) { }

  //storing user email in localstorage
  storeUserEmail(email: string) {
    localStorage.setItem('email', email);
  }
  //Getting user email from the localstorage
  getUserEmail() {
    return localStorage.getItem('email');
  }

  //registering the user
  registerUser(user: any) {
    return this.http.post(`${this.environment.baseUrl}/user/register`, user);
  }

  //user login
  loginUser(user: any) {
    return this.http.post(`${this.environment.baseUrl}/user/login`, user);
  }
  getOrderReview(id: any) {
    return this.http.get(`${this.environment.baseUrl}/user/order/review/${id}`);
  }
  //otp verification
  verifyOtp(val: any) {
    return this.http.post(`${this.environment.baseUrl}/user/verifyotp`, val);
  }
  //getItemsList
  getAllMenu() {
    return this.http.get<{
      error: string;
      message: string;
      data: any;
    }>(`${this.environment.baseUrl}/restaurant/getAllMenu`);
  }
  makePayment(val: any):Observable<{
    error: boolean;
    message: string;
    payment:any,
    success: boolean
  }> {
    return this.http.post<
    {
      error: boolean;
      message: string;
      payment:any,
      success: boolean
    }
    >(`${this.environment.baseUrl}/user/payment`, val);
  }
  giverating(val: any) {
    return this.http.post<{
      error: boolean;
      message: string;
      data: any;
    }>(`${this.environment.baseUrl}/restaurant/ratings`, val);
  }
  placeOrder(val: any) {
    return this.http.post(`${this.environment.baseUrl}/user/order`, val);
  }
  addCart(val: any) {
    return this.http.post(`${this.environment.baseUrl}/user/cart`, val);
  }
  addMenu(data: any) {
    return this.http.post(`${this.environment.baseUrl}/restaurant/addMenu`, data);
  }
  editMenu(data: any, id: any) {
    return this.http.put(
      `${this.environment.baseUrl}/restaurant/editMenu/${id}`,
      data
    );
  }
  getAllUsers() {
    return this.http.get<{
      error: boolean;
      message: string;
      data: any;
    }>(`${this.environment.baseUrl}/restaurant/getAllUsers`);
  }
  // getRatings(): Observable<jsonratings> {
  //   return this.http.get<jsonratings>(`${environment.baseUrl}/user/getAllRatings`);
  // }
  getRatings(): Observable<jsonratings> {
    return this.http.get<jsonratings>(`${this.environment.baseUrl}/restaurant/getRatingsByEmail`);
  }
  getUserRatingByUserId(userId: number) {
    return this.http.post<{
      error:boolean,
      message:string,
      data:any
    }>(`${this.environment.baseUrl}/restaurant/rating/user/${userId}`, null);
  }
  bookTable(data: any) {
    return this.http.post(`${this.environment.baseUrl}/user/bookTable`, data);
  }
}