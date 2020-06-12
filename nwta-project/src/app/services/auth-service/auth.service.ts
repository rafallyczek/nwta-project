import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    if(sessionStorage.getItem('token')==null){
      // console.log(sessionStorage.getItem('token'))
      return false;
    }else{
      // console.log(sessionStorage.getItem('token'))
      return true;
    }     
  }

}
