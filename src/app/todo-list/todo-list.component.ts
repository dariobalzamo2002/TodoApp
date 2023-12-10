import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todo!: Todo[];
  @Output() sendItem = new EventEmitter<Todo>();
  @Output() sendUpdateItem = new EventEmitter<Todo>();


  constructor() { }

  ngOnInit(): void {
  }

  public remove(itemRemove: Todo) {
    this.sendItem.emit(itemRemove);
  }

  public update(itemUpdate: Todo) {
    this.sendUpdateItem.emit(itemUpdate);
  }

}
