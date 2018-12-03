import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8081/books';
  public getBooks() {
    return this.http.get<Book[]>(this.baseUrl);
  }

  public getBookById(id: Number) {
    return this.http.get<Book>(this.baseUrl + '/' + id);
  }

  public addBook(book: Book) {
    return this.http.post<Book>(this.baseUrl, book);
  }

}
