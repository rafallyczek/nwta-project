package nwta.project.restapi.services;

import nwta.project.restapi.model.Book;
import nwta.project.restapi.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    //Pobierz wszystkie książki
    public List<Book> getAllBooks(){
        List<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(books::add);
        return books;
    }

    //Pobierz książkę po id
    public Optional<Book> getBookById(Long id){
        return bookRepository.findById(id);
    }

    //Dodaj książkę
    public void addBook(Book book){
        bookRepository.save(book);
    }

    //Aktualizuj książkę
    public void updateBook(Book book){
        Book newBook = bookRepository.findById(book.getId()).get();
        newBook.setTitle(book.getTitle());
        newBook.setAuthor(book.getAuthor());
        newBook.setYear(book.getYear());
        newBook.setGenre(book.getGenre());
        bookRepository.save(newBook);
    }

    //Usuń książkę
    public void deleteBook(Long id){
        bookRepository.deleteById(id);
    }

}
