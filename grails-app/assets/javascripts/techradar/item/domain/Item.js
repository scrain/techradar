//= wrapped
//= require /angular/angular-resource

angular
    .module("techradar.item")
    .factory("Item", Item);

function Item($resource, domainListConversion, domainConversion) {
    var Item = $resource(
        "item/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Quadrant", "quadrant", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("Quadrant", "quadrant")]}}
    );

    Item.list = Item.query;

    Item.prototype.toString = function() {
        // return 'tech.radar.Item : ' + (this.id ? this.id : '(unsaved)');
        return this.name;
    };

    return Item;
}
