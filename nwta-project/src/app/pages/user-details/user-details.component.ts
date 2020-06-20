import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  username: string;
  name: string;
  surname: string;
  user: User = new User();
  confirmPass: string;
  confirmPass2: string;
  repeatedPass: string;

  constructor(
    private userService: UserService,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.name = localStorage.getItem('name');
    this.surname = localStorage.getItem('surname');
    this.loadUserData();
  }

  onSubmit(){
    if(this.confirmPass!=atob(localStorage.getItem('token')).split(":")[1]){
      alert("Nieprawidłowe hasło.");
    }else{
      this.update(this.confirmPass);
    }    
  }

  onSubmitPass(){
    if(this.confirmPass2!=atob(localStorage.getItem('token')).split(":")[1]){
      console.log(this.confirmPass2);
      console.log(atob(localStorage.getItem('token')).split(":")[1]);
      alert("Nieprawidłowe hasło.");
    }else if(this.user.password!=this.repeatedPass){
      alert("Hasła muszą się zgadzać.");
    }else{
      this.update(this.confirmPass2);
    }    
  }

  loadUserData(){
    this.userService.getUser(this.username)
      .subscribe(
        data => {
          console.log(data);
          this.user.id = data['id'];
        },
        error => console.log(error)
      ); 
  }

  update(pass: string){
    this.userService.updateUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token',btoa(this.username+':'+pass));
          this.refresh();
          window.location.reload();
          this.user = new User();
        },
        error => console.log(error)
        );              
  }

  refresh(){
    this.userService.getUser(this.username)
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('id',data['id']);
        localStorage.setItem('username',data['username']);
        localStorage.setItem('name',data['name']);
        localStorage.setItem('surname',data['surname']);
        localStorage.setItem('admin',data['admin']);
        this.name = localStorage.getItem('name');
        this.surname = localStorage.getItem('surname');        
        this.appComponent.refreshUser(); 
      },
      error => console.log(error));    
  }

}
