import { Component } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import {Auth} from '../../services/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerData ={
    name: '',
    email: '',
    password: ''
  }


constructor(private auth: Auth, private router: Router) {}

register(){
  this.auth.register(this.registerData).subscribe(response =>{
    console.log(response);
    alert('Registration successful!');
     this.router.navigate(['/login']);
  });

}
}