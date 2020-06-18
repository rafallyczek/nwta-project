import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nwta-project';

  username: string;
  name: string;
  surname: string;
  admin: boolean;

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(){
    this.username = localStorage.getItem('username');
    this.name = localStorage.getItem('name');
    this.surname = localStorage.getItem('surname');
    this.admin = localStorage.getItem('username')=='true' ? true : false;
   }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('surname');
    localStorage.removeItem('admin');
    this.router.navigate(["/home"]);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  refreshUser() {
    if (localStorage.length > 0) {
      this.username = localStorage.getItem('username');
      console.log(this.username);
      this.admin = localStorage.getItem('username') ? true : false;
      console.log(this.admin);
    }
  }

}

