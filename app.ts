/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: "todo"
})
@View({
  templateUrl: "views/todo.html"
})
// Controller
class Todo{
  constructor(){
  }
}

bootstrap(Todo);
