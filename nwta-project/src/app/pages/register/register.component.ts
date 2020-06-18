import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model/user';
import { UserService } from 'src/app/services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router) { }

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
          this.router.navigate(["/home"]);
        },
      error => console.log(error));
      this.user = new User();
  }

}
