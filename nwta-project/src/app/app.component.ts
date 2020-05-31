import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nwta-project';

  constructor(private authService: AuthService) {}

  logout(){
    sessionStorage.removeItem('token');
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}

