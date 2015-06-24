/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoList} from "./todo-list";
import {AddItem} from "./add-item";

@Component({
  selector: "todo"
})
@View({
  templateUrl: "views/todo.html",
  directives: [TodoList, AddItem]
})
// Controller
class Todo{
  constructor(){
  }
}

bootstrap(Todo);
