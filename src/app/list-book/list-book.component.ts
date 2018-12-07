import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  books: Book[];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => { this.books = data; });
  }
  deleteBook(book: Book): void {
    this.bookService.deleteBook(book)
      .subscribe( data => {
        this.books = this.books.filter(u => u !== book);
      });
  }
  editBook(book: Book): void {
    localStorage.removeItem('editBookId');
    localStorage.setItem('editBookId', book.id.toString());
    this.router.navigate(['edit-book']);
  }

}
