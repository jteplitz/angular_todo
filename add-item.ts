/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: "add-item"
})
@View({
  templateUrl: "views/add-item.html"
})
export class AddItem{
  constructor(){}
}
