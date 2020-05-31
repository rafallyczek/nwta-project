import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080";

  constructor( private http: HttpClient ) { }

  deleteUser(id: number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteUser/${id}`);
  }

  addUser(user: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/addUser`, user);
  }

}
