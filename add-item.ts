/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {EventEmitter} from 'angular2/src/facade/async';

@Component({
  selector: "add-item",
  events: ["additem"]
})
@View({
  templateUrl: "views/add-item.html"
})
export class AddItem{
  additem: EventEmitter = new EventEmitter();

  constructor(){}

  addTodo(title: string){
    this.addItem.next(title);
  }
  
  doneTyping($event): void{
    console.log("don't remoe");
    // TODO: respond to enter
  }
}
