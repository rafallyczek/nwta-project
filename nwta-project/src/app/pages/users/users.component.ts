import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { User } from 'src/app/models/user-model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  loggedUserId: number;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loggedUserId = parseInt(localStorage.getItem("id"));
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers()
      .subscribe(
        data => {
          console.log(data);
          this.users = data;
        },
        error => console.log(error)
      );
  }

  deleteUser(id: number){
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      window.location.reload();
  }

}
