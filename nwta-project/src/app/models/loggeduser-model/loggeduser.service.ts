import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedUser {

  id: number;
  username: string;
  admin: boolean;

  getLoggedUser() {
    return this;
  }

  setLoggedUser(id: number,
    username: string,
    admin: boolean) {

    this.id = id;
    this.username = username;
    this.admin = admin;

  }

  getId() {
    return this.id;
  }

  getUsername() {
    return this.username;
  }

  getAdmin() {
    return this.admin;
  }
  
}
