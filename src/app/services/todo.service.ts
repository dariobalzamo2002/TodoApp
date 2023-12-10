import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';
import { enviroment } from '../environments/enviroment';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

// Service, classe che implementa metodi per collegarsi al backend mediante le chiamate Http
export class TodoService {

    constructor(private http: HttpClient) { }

    public getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(enviroment.url + '/todos');
    }

    public addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(enviroment.url + '/todos', todo);
    }

    public removeTodo(item: Todo): Observable<Todo> {
        return this.http.delete<Todo>(enviroment.url + `/todos/${item.id}`);
    }

    public updateTodo(item: Todo): Observable<Todo> {
        return this.http.put<Todo>(enviroment.url + `/todos/${item.id}`, item);
    }

    public getByIdTodo(id: number | string): Observable<Todo> {
        return this.http.get<Todo>(enviroment.url + `/todos/${id}`);
    }
}