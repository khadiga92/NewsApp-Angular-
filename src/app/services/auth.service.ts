import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  // signUp
  signUp(credentials:any){
    return this.http.post(this.url+'signup',credentials)
  }

  // login
  logIn(credentials:any){
    return this.http.post(this.url+'login',credentials)
  }

  //Token
  getToken(){
    return localStorage.getItem('token')
  }

  //Logout
  logout(){
    return this.http.delete(this.url+'logout')
  }

}
