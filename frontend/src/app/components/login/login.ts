import { Component } from '@angular/core';
import {Auth} from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData = {
    email: '',
    password: ''
  }
  constructor(private auth: Auth, private router: Router) {}

  login(){
    this.auth.login(this.loginData).subscribe((response: any) =>{
      console.log(response);
      localStorage.setItem(
      'token',
      response.token
    );
      alert('Login successful!');
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']);
      
    }, (error: any) => {
      console.error('Login failed', error);
      alert('Login failed. Please check your credentials and try again.');
    });
  }
}