import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestauthService {

  constructor() { }

  isLoggedIn(){
    if(localStorage.getItem('token')!=null){
      return false;
    }else{
      return true;
    }     
  }

}
