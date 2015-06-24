/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: "todo-list"
})
@View({
  templateUrl: "views/todo-list.html",
  directives: [NgFor]
})
export class TodoList{
  //items: TodoItems = [];
  items: TodoItem[];

  addItem(title: string){
    this.items.push(new TodoItem(title));
  }

  removeItem(index: number){
    this.items.splice(index, 1);
  }

  constructor(){
    this.items = [];
  }
}

class TodoItem{
  title: string;

  constructor(title: string){
    this.title = title;
  }
}
