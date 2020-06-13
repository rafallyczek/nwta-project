import { Injectable } from '@angular/core';
import { LoggedUser } from '../loggeduser-service/loggeduser.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor(private loggedUser: LoggedUser) { }

  isLoggedIn() {
    if (sessionStorage.getItem('token')!=null && this.loggedUser.getAdmin()==true) {
      return true;
    } else {
      return false;
    }
  }

}
