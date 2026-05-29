import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isLoggedIn (): boolean {
    if(typeof window !== 'undefined'){
      return !!localStorage.getItem('token');
    }
    return false;
  }
  logout(){
    if(typeof window !== 'undefined'){
    localStorage.removeItem('token');
    window.location.reload();
  }
}
}
