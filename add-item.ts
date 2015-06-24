/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {EventEmitter} from 'angular2/src/facade/async';

@Component({
  selector: "add-item",
  events: ["add"]
})
@View({
  templateUrl: "views/add-item.html"
})
export class AddItem{
  add: EventEmitter = new EventEmitter();

  constructor(){}

  addTodo(title: string){
    this.add.next(title);
  }
  
  doneTyping($event): void{
    if ($event.which === 13){
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}
