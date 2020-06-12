import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private editId = null;
  private url = "http://localhost:8080";

  constructor( private http: HttpClient) { }

  //Pobierz wszystkie książki
  getAllBooks() : Observable<any> {
    return this.http.get(`${this.url}/books`);
  }

  //Pobierz książkę o zadanym id
  getBookById(id: number) : Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem("token"));
    console.log(headers);
    return this.http.get(`${this.url}/bookById/`+id, {headers: headers});
  }

  //Dodaj nową książkę
  saveBook(book: any) : Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem("token"));
    console.log(headers);
    return this.http.post(`${this.url}/addBook`, book, {headers: headers});
  }

  //Usuń książkę
  deleteBook(id: number) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem("token"));
    console.log(headers);
    return this.http.delete(`${this.url}/deleteBook/`+id, {headers: headers});
  }

  //Aktualizuj książkę
  updateBook(book: any) : Observable<any> {
    const headers = new HttpHeaders().set('Authorization','Basic '+sessionStorage.getItem("token"));
    console.log(headers);
    return this.http.post(`${this.url}/update`, book, {headers: headers});
  }

  //Ustaw editId
  setEditId(id: number){
    this.editId = id;
  }

  //Zwróc editId
  getEditId() : number{
    return this.editId;
  }

}
