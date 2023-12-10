import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent implements OnInit, OnChanges {

  @Input() itemToUpdate!: Todo;
  @Output() itemModified = new EventEmitter<Todo>();
  @Output() sendNewItem = new EventEmitter<Todo>();

  public isUpdate!: boolean;


  public todoForm = this.fb.group({
    name: [''],
    description: [''],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isUpdate = false;
  }

  ngOnChanges(): void {
    this.updateProfile();
    this.isUpdate = true;
  }


  public updateProfile() {
    this.todoForm.patchValue({
      name: this.itemToUpdate?.name,
      description: this.itemToUpdate?.description,
    });
  }

  onSubmit() {
    let newItem = new Todo();
    newItem.name = this.todoForm.value['name'];
    newItem.description = this.todoForm.value['description'];
    newItem.addedIn = 0;
    newItem.deadline = 0;
    newItem.done = false;
    this.sendNewItem.emit(newItem);
  }

  onUpdate() {
    this.itemToUpdate.id = this.itemToUpdate.id;
    this.itemToUpdate.name = this.todoForm.value['name'];
    this.itemToUpdate.description = this.todoForm.value['description'];
    this.itemToUpdate.done = this.todoForm.value['false'];
    this.isUpdate = false;
    this.itemModified.emit(this.itemToUpdate);
  }
}