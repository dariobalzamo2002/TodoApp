import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public id!: number | string;
  // il $ indica che è un Observable, observer ecc
  public detail$!: Observable<Todo>;
  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getDetail(this.id);
  }

  getDetail(id: number | string) {
    // l'observable che ritorna lo assegnamo alla nostra proprietà
    this.detail$ = this.todoService.getByIdTodo(id);
  }
}
