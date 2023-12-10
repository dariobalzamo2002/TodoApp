import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';
import { MainRoutingModule } from '../main/main-routing.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})

export class TodoCardComponent implements OnInit {

  @Input('itemCard') item!: Todo;
  @Output() removeItem = new EventEmitter<Todo>();
  @Output() updateItem = new EventEmitter<Todo>();


  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void { }


  public update(updateItem: Todo) {
    this.updateItem.emit(updateItem);
  }

  public remove(removeItem: Todo) {
    this.removeItem.emit(removeItem);
  }

  goToDetail(id: number | string) {
    this.router.navigate(['detail', id]);
  }
}