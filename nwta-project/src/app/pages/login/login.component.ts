import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseUrl = "http://localhost:8080";
  private username;
  private password;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationEnd){
          if(this.authService.isLoggedIn()){
            this.router.navigate(['home']);
          }
        }
      }
    );
   }

  ngOnInit() {
  }

  login() { 
    const headers = new HttpHeaders().set('Authorization','Basic '+btoa(this.username+':'+this.password));
    this.http.get(`${this.baseUrl}/login`, {headers})
    .subscribe(data => {
      console.log(data);
      if(data){
        sessionStorage.setItem('token',btoa(this.username+':'+this.password));
        sessionStorage.setItem('username',this.username);
        this.router.navigate(['home']);
      }else{
        alert("Błąd autentykacji.");
      }
    },
    error => {
      console.log(error);
      if(error.status == 401){
        alert("Odmowa dostępu.");
      }
    });
  }

}
