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
    this.update();
  }

  loadUserData(){
    this.userService.getUser(this.username)
      .subscribe(
        data => {
          console.log(data);
          this.user.id = data['id'];
          this.user.username = data['username'];
          this.user.password = data['password'];
          this.user.name = data['name'];
          this.user.surname = data['surname'];
          this.user.admin = data['admin'];
        },
        error => console.log(error)
      ); 
  }

  update(){
    this.userService.updateUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          this.refresh();
          window.location.reload();
        },
        error => console.log(error)
        );
      this.user = new User();          
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
