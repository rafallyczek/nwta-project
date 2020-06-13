import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { LoggedUser } from './services/loggeduser-service/loggeduser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nwta-project';

  user: LoggedUser;

  constructor(
    private authService: AuthService, 
    private loggedUser: LoggedUser,
    private router: Router) { }

  ngOnInit(){
    // this.user = this.loggedUser.getLoggedUser();
    // sessionStorage.removeItem('token');
    // this.user = null;
    // this.refreshUser();
  }

  logout(){
    sessionStorage.removeItem('token');
    this.user = null;
    console.log(this.user);
    this.router.navigate(["/home"]);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  refreshUser() {
    if (sessionStorage.length > 0) {
      this.user = this.loggedUser.getLoggedUser();
      console.log(this.user);
    }
  }

}

