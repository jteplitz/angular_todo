if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoList = (function () {
    function TodoList() {
        addItem("test 1");
        addItem("test 2");
    }
    TodoList.prototype.addItem = function (title) {
        items.push(new TodoItem(title));
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: "todo-list"
        }),
        angular2_1.View({
            template: System.import("views/todo-list.html!text")
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
var TodoItem = (function () {
    function TodoItem(title) {
        this.title = title;
    }
    return TodoItem;
})();
