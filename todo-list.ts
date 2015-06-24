import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: "todo-list"
})
@View({
  template: System.import("views/todo-list.html!text")
})
class TodoList{
  items: TodoItems;

  constructor(){
    addItem("test 1");
    addItem("test 2");
  }

  addItem(title: string){
    items.push(new TodoItem(title));
  }
}

interface TodoItems{
  [index: number]: TodoItem;
}

class TodoItem{
  title: string;

  constructor(title: string){
    this.title = title;
  }
}
