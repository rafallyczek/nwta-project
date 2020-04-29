package nwta.project.restapi.controllers;

import nwta.project.restapi.model.Book;
import nwta.project.restapi.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping("/books")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

}
