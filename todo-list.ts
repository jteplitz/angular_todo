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

  /*public addItem = (title: string) : void => {
    this.items.push(new TodoItem(title));
  }*/
  addItem(title: string){
    this.items.push(new TodoItem(title));
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
