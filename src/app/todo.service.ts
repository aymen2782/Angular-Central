import { Injectable } from '@angular/core';
import {Todo} from "./Model/Todo";

@Injectable()
export class TodoService {
  private todos : Todo[];

  constructor() {
    this.todos=[
      new Todo('sevice' ,'finaliser Tp Service'),
      new Todo('http','Entamer TP HTTP' )
    ];
  }

  addTodo(name,description){
    let newTodo = new Todo(name,description);
    this.todos.push(newTodo);
    console.log(this.todos);
  }

  getTodos(){
    return this.todos;
  }

  setTodos(newTodos : Todo[]) {
    this.todos = newTodos;
  }

   removeTodo(todo:Todo){
    var index = this.todos.indexOf(todo, 0);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }


}
