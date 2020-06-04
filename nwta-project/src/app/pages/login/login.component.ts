import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseUrl = "http://localhost:8080";
  private username;
  private password;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() { 
    const headers = new HttpHeaders().set('Authorization','Basic '+btoa(this.username+':'+this.password));
    this.http.get(`${this.baseUrl}/login`, {headers})
    .subscribe(data => {
      console.log(data);
      if(data){
        sessionStorage.setItem('token',btoa(this.username+':'+this.password))
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
