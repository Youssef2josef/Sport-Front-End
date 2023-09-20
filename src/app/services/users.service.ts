import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  signupUrl: string="http://localhost:8086/api/auth";

  constructor(private http:HttpClient) { }
  signup(newUser){
   return this.http.post(this.signupUrl+"/register",newUser)  
  }
  signupAdmin(admin){
    return this.http.post(this.signupUrl+"/register",admin)  
  }
  
  login(user){
   return this.http.post<{accessToken:any}>(this.signupUrl+"/login",user)
  }
}
