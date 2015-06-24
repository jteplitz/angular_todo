var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var async_1 = require('angular2/src/facade/async');
var AddItem = (function () {
    function AddItem() {
        this.add = new async_1.EventEmitter();
    }
    AddItem.prototype.addTodo = function (title) {
        this.add.next(title);
    };
    AddItem.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    AddItem = __decorate([
        angular2_1.Component({
            selector: "add-item",
            events: ["add"]
        }),
        angular2_1.View({
            templateUrl: "views/add-item.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AddItem);
    return AddItem;
})();
exports.AddItem = AddItem;
