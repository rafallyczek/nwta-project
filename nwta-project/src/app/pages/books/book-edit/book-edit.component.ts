import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model/book';
import { BooksService } from 'src/app/services/book-service/books.service';
import { Router } from '@angular/router';
import { BooksComponent } from '../books.component';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book = new Book();

  constructor(
    private booksService: BooksService,
    private router: Router) {
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
          this.router.navigate(["/books"]);
        },
        error => console.log(error)
        );
        this.book = new Book();             
  }

}
