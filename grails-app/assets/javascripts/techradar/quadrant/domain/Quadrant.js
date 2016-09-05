//= wrapped
//= require /angular/angular-resource

angular
    .module("techradar.quadrant")
    .factory("Quadrant", Quadrant);

function Quadrant($resource, domainListConversion, domainToManyConversion, domainConversion) {
    var Quadrant = $resource(
        "quadrant/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Item", "items", "domainToManyConversion"), domainListConversion("Radar", "radar", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("Item", "items"), domainConversion("Radar", "radar")]}}
    );

    Quadrant.list = Quadrant.query;

    Quadrant.prototype.toString = function() {
        // return 'tech.radar.Quadrant : ' + (this.name ? this.name : '(unsaved)');
        return this.name;
    };

    return Quadrant;
}
