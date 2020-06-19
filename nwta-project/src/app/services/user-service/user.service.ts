import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080";

  constructor( private http: HttpClient ) { }

  deleteUser(id: number) : Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+localStorage.getItem("token"));
    return this.http.get(`${this.baseUrl}/deleteUser/${id}`, {headers: headers});
  }

  addUser(user: any) : Observable<any> {
    return this.http.post(`${this.baseUrl}/addUser`, user);
  }

  getAllUsers() : Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+localStorage.getItem("token"));
    return this.http.get(`${this.baseUrl}/users`, {headers: headers});
  }

  updateUser(user: any) : Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+localStorage.getItem("token"));
    return this.http.post(`${this.baseUrl}/updateUser`, user, {headers: headers});
  }

  getUser(username: string) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization','Basic '+localStorage.getItem("token"));
    return this.http.get(`${this.baseUrl}/getUser/`+username, {headers: headers});
  }

  login(username: string, password: string) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization','Basic '+btoa(username+':'+password));
    return this.http.get(`${this.baseUrl}/getUser/`+username, {headers: headers});
  }

}
