//= wrapped
//= require /angular/angular-resource

angular
    .module("techradar.item")
    .factory("Item", Item);

function Item($resource) {
    var Item = $resource(
        "item/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Item.list = Item.query;

    Item.prototype.toString = function() {
        // return 'tech.radar.Item : ' + (this.id ? this.id : '(unsaved)');
        return this.name;
    };

    return Item;
}
