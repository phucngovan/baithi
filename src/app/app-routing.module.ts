import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {AddComponent} from './add/add.component';
import {UnreadListComponent} from './unread-list/unread-list.component';
import {EditComponent} from './edit/edit.component';

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
  },
  {
    path: 'edit-book',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
