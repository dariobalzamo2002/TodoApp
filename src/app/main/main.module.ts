import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { DetailComponent } from '../detail/detail.component';



@NgModule({
  declarations: [
    MainComponent,
    TodoCardComponent,
    TodoFormComponent,
    TodoListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
