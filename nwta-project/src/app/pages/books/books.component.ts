import { Component, OnInit } from '@angular/core';
import { Book } from './book/book';
import { BooksService } from './book/books.service';
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

}
