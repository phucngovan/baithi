import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {AddComponent} from './add/add.component';
import {UnreadListComponent} from './unread-list/unread-list.component';

const routes: Routes = [
  {
    path: 'UnRead',
    component: UnreadListComponent
  },
  {
    path: 'list-book',
    component: ListBookComponent
  },
  {
    path: 'add-book',
    component:  AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
