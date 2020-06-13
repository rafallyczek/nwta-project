import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/app/services/loggeduser-service/loggeduser.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseUrl = "http://localhost:8080";
  private username;
  private password;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private loggedUser: LoggedUser,
    private appComponent: AppComponent,) { }

  ngOnInit() {
  }

  login() { 
    const headers = new HttpHeaders().set('Authorization','Basic '+btoa(this.username+':'+this.password));

    this.http.get(`${this.baseUrl}/login`, {headers})
    .subscribe(data => {
      console.log(data);
      if(data){
        sessionStorage.setItem('token',btoa(this.username+':'+this.password));
        this.getUserData();
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

  getUserData(){
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem('token'));

    this.http.get(`${this.baseUrl}/getUser/`+this.username, {headers: headers})
      .subscribe(data => {
        console.log(data);
        this.loggedUser.setLoggedUser(
          data['id'],
          data['username'],
          data['admin']);
          console.log(this.loggedUser.getLoggedUser()); 
          this.appComponent.refreshUser();       
      },
        error => console.log(error));
  }

}
