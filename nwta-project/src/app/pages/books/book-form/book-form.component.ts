import { Component, OnInit } from '@angular/core';
import { BooksService } from '../book/books.service';
import { Router } from '@angular/router';
import { Book } from '../book/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book = new Book();

  constructor(private booksService: BooksService, private router: Router) { }

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
        },
        error => console.log(error)
        );
        this.book = new Book();
        this.router.navigate(["/books"]);      
  }

}
