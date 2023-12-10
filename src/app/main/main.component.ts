import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';
import { tap, pipe, switchMap, concat, mergeMap } from 'rxjs'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // public todoArray: Todo[] = [
  //   {
  //     id: 1,
  //     name: "Card 1",
  //     description: "Lorem ipsum",
  //     done: false,
  //     addedIn: 1701271724138,
  //     deadline: 1674860400000
  //   },
  //   {
  //     id: 2,
  //     name: "Card 2",
  //     descrizione: "Lorem ipsum",
  //     done: true,
  //     addedIn: 1701271724135,
  //     deadline: 1674860400000
  //   },
  //   {
  //     id: 3,
  //     name: "Card 3",
  //     descrizione: "Lorem ipsum",
  //     done: false,
  //     addedIn: 1701271724145,
  //     deadline: 1674860400000
  //   },
  //   {
  //     id: 4,
  //     name: "Card 4",
  //     description: "Lorem ipsum",
  //     done: false,
  //     addedIn: 1701271724167,
  //     deadline: 1674860400000
  //   },
  // ];


  public todoArray: Todo[] = [];
  public todoToUpdate!: Todo;


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getList();
  }


  ////////////////////////////// METODI CRUD ///////////////////////////////////////////////////////

  // 1) [C] Insert items: inserisce mediante chiamata post con un form una nuova entita nel backend
  public add(newItem: Todo) {
    this.todoService.addTodo(newItem).subscribe({
      next: (response: Todo) => {
        this.todoArray.push(response);
        console.log(response);
      },
      error: (error) => { console.log(error); },
      complete: () => { console.log("complete"); }
    })
  }

  // 2) [R] Get All items: preleva dal backend (database) le risorse
  public getList() {
    this.todoService.getTodos()
      .subscribe((response: Todo[]) => {
        this.todoArray = response;
      });
  }

  // 2) [U] update
  public update(itemUpdate: Todo) {
    this.todoService.updateTodo(itemUpdate)
      .pipe(switchMap(() => this.todoService.getTodos()))
      .subscribe(
        (response: Todo[]) => {
          this.todoArray = response;
        }
      )
  }

  // 3) [D] remove
  public receiveItemToRemove(item: Todo) {
    this.todoService.removeTodo(item)
      .pipe(switchMap(() => this.todoService.getTodos()))
      .subscribe({
        next: (response) => {
          console.log('response ', response);
          this.todoArray = response;
        },
        error: (error) => {
          console.log('errore', error);
        },
        complete: () => { console.log('sono nella complete'); }
      });
  }

  /////////////////////////////////////////////////////////////////////////////////////////


  public receiveItemToUpdate(item: Todo) {
    this.todoToUpdate = item;
  }


  //// CODICE NUOVO /////////////////
  // public getList() {
  //   this.todoService.getTodos()
  //     .subscribe((response: Todo[]) => this.todoArray = response);
  // }

  // public deletePrivileges(row: Privilege) {
  //   this.todoService.deleteTodos(item.id)
  //     .pipe(switchMap(() =>
  //     .pipe(
  //       tap(() =>
  //         this.getList()
  //       ))
  //         .subscribe();
  // }

  //// ---------- /////////////////

  // receiveItemToRemove(item: Todo) {
  //   this.todoService.removeTodo(item)
  //     .pipe(
  //       switchMap(() => this.todoService.getTodos())
  //     )
  //     .subscribe((response: Todo[]) => {
  //       this.todoArray = response;
  //       console.log("Lista aggiornata dopo la cancellazione:", this.todoArray);
  //     });
  // }
}

// function autoIncrement(array: Todo[]): number {
//   const length = array.length;
//   return length + 1;
// }