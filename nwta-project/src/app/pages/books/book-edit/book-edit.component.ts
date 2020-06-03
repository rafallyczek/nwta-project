import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BooksService } from '../book/books.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book = new Book();

  constructor(private booksService: BooksService, private router: Router) {
    this.router.events.subscribe(
      (event) => {
        if(event instanceof NavigationEnd){
          this.loadBookData();
        }
      }
    );
   }

  ngOnInit() {
    this.loadBookData();
  }

  onSubmit(){
    this.update();
  }

  //Wczytaj dane książki
  loadBookData(){
    this.booksService.getBookById(this.booksService.getEditId())
      .subscribe(
        data => {
          console.log(data);
          this.book = data;
        },
        error => console.log(error)
        ); 
  }

  //Aktualizuj książkę
  update(){
    this.booksService.updateBook(this.book)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error)
        );
        this.book = new Book();
        this.router.navigate(["/books"]);      
  }

}
