import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model/user';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.save();
  }

  save() {
    this.user.admin = false;
    this.userService.addUser(this.user)
      .subscribe(
        data => {
          console.log(data);
        },
      error => console.log(error));
      this.user = new User();
  }

}
