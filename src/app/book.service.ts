import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/book-portal/books';
  public getBooks() {
    return this.http.get<Book[]>(this.baseUrl);
  }

  public getBookById(id: String) {
    return this.http.get<Book>(this.baseUrl + '/' + id);
  }

  public addBook(book: Book) {
    return this.http.post<Book>(this.baseUrl, book);
  }
  public deleteBook(book) {
    return this.http.delete<Book>(this.baseUrl + '/' + book.id);
  }
  public editBook(book: Book) {
    return this.http.put<Book>(this.baseUrl + '/' + book.id, book);
  }

}
