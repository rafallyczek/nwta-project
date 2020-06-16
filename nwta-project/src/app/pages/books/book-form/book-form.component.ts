import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book-model/book';
import { BooksService } from 'src/app/services/book-service/books.service';
import { Router } from '@angular/router';
import { BooksComponent } from '../books.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book = new Book();

  constructor(
    private booksService: BooksService, 
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.save();
  }

  //Dodaj książkę
  save(){
    this.booksService.saveBook(this.book)
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
