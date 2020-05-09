package nwta.project.restapi.controllers;

import nwta.project.restapi.model.Book;
import nwta.project.restapi.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/bookById/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Book getBookById(@PathVariable Long id){
        return bookService.getBookById(id);
    }

    @PostMapping("/addBook")
    @CrossOrigin(origins = "http://localhost:4200")
    public void addBook(@RequestBody Book book){
        bookService.addBook(book);
    }

    @PostMapping("deleteBook/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void deleteUser(@PathVariable Long id){
        bookService.deleteBook(id);
    }

}
