import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  username: string;
  name: string;
  surname: string;

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.name = localStorage.getItem('name');
    this.surname = localStorage.getItem('surname');
  }

}
