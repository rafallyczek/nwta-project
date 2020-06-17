import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  isLoggedIn() {
    if (localStorage.getItem('token')!=null && localStorage.getItem('admin')=='true') {
      return true;
    } else {
      return false;
    }
  }

}
