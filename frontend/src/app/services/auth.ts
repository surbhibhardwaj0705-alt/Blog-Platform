import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class Auth {

  apiUrl = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}

register(userData: any)
{
    
  return this.http.post(this.apiUrl+"/register",userData);
}

login(loginData: any){
  return this.http.post(this.apiUrl+"/login", loginData);
}

}
