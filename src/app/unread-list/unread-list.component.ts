import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-unread-list',
  templateUrl: './unread-list.component.html',
  styleUrls: ['./unread-list.component.scss']
})
export class UnreadListComponent implements OnInit {
  books: Book[];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => { this.books = data; });
  }

}
