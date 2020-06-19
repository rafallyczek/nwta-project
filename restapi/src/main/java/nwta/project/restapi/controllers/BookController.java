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
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @GetMapping("/bookById/{id}")
    public Book getBookById(@PathVariable Long id){
        return bookService.getBookById(id);
    }

    @PostMapping("/addBook")
    public void addBook(@RequestBody Book book){
        bookService.addBook(book);
    }

    @DeleteMapping("/deleteBook/{id}")
    public void deleteUser(@PathVariable Long id){
        bookService.deleteBook(id);
    }

    @PostMapping("/updateBook")
    public void updateBook(@RequestBody Book book){
        bookService.updateBook(book);
    }

}
