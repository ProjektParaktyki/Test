import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from "@angular/common/http";
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { 
    
    //this.headers.set('Content-Type', 'text/html; charset=utf-8');
  }
 
  getUser()
  {
    return this.http.get(environment.URL + "/user");
  } 

  login(_email, pass)
  {
   return  this.http.post(environment.URL + "/login",  {email:_email, password:pass},{ headers: this.headers });
  }
}
