import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  book: Book;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    const bookId = localStorage.getItem('editBookId');
    if (!bookId) {
      alert('Invalid action.');
      this.router.navigate(['list-book']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      reader: ['', Validators.required]
    });
    this.bookService.getBookById(bookId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.bookService.editBook(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-book']);
        },
        error => {
          alert(error);
        });
  }

}
