import { Component } from '@angular/core';
import { AuthService } from './services/auth-service/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nwta-project';

  username: string;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationEnd){
          this.username = sessionStorage.getItem('username');
        }
      }
    );
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}

