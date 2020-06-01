import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:8080";

  constructor( private http: HttpClient) { }

  getAllBooks() : Observable<any> {
    return this.http.get(`${this.url}/books`);
  }

  saveBook(book: any) : Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem("token"));
    console.log(headers);
    return this.http.post(`${this.url}/addBook`, book, {headers: headers});
  }

}
