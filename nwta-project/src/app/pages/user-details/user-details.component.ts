import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

}
