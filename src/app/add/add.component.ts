import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: BookService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required ],
      reader: ['', Validators.required]
    });
  }
  onSubmit() {
    this.bookService.addBook(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-book']).then(function () {
            return alert('phucho');
          }
        );
      });
  }
}
