import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model/book';
import { BooksService } from 'src/app/services/book-service/books.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book>;

  constructor( private booksService : BooksService, private router: Router) { 
    this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationEnd){
          this.getAllBooks();
        }
      }
    );
  }

  ngOnInit() {
    this.getAllBooks();
  }

  //Pobierz książki
  getAllBooks(){
    this.booksService.getAllBooks()
      .subscribe(
        data => {
          console.log(data);
          this.books = data;
        },
        error => console.log(error)
      );
  }

  //Usuń książkę
  deleteBook(id: number){
    this.booksService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
      );
      window.location.reload();
  }

  //Przejdź do edycji
  edit(id: number){
    this.booksService.setEditId(id);
    this.router.navigate(["/edit"]); 
  }

}
