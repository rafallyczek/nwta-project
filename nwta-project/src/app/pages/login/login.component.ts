import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  constructor( 
    private router: Router, 
    private appComponent: AppComponent,
    private userService: UserService) { }

  ngOnInit() {
  }

  login() { 
    this.userService.login(this.username,this.password)
    .subscribe(data => {
      console.log(data);
      if(data){
        localStorage.setItem('token',btoa(this.username+':'+this.password));
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
    this.userService.getUser(this.username)
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('id',data['id']);
        localStorage.setItem('username',data['username']);
        localStorage.setItem('name',data['name']);
        localStorage.setItem('surname',data['surname']);
        localStorage.setItem('admin',data['admin']);        
        this.appComponent.refreshUser();       
      },
      error => console.log(error));
  }

}
