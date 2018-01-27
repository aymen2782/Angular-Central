import { Component, OnInit } from '@angular/core';
import {Todo} from "../Model/Todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  name : string;
  description : string ;
  private todos : Todo[];
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  ajouter(){
   this.todoService.addTodo(this.name,this.description);
  }

  delete(todo){
    console.log('delete');
    this.todoService.removeTodo(todo);
  }
}
