import { Component, OnInit } from '@angular/core';
import { LoginForm } from './loginform/loginform';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseUrl = "http://localhost:8080";
  loginForm: LoginForm = new LoginForm();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    sessionStorage.setItem('token',null);
  }

  login() {
    this.http.post(`${this.baseUrl}/login`, this.loginForm)
    .subscribe(data => {
      console.log(data);
      if(data){
        sessionStorage.setItem('token',btoa(this.loginForm.username+':'+this.loginForm.password))
        console.log(sessionStorage.getItem('token'));
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
