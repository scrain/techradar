//= wrapped
//= require /angular/angular-resource

angular
    .module("techradar.radar")
    .factory("Radar", Radar);

function Radar($resource, domainListConversion, domainToManyConversion) {
    var Radar = $resource(
        "radar/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Quadrant", "quadrants", "domainToManyConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("Quadrant", "quadrants")]}}
    );

    Radar.list = Radar.query;

    Radar.prototype.toString = function() {
        //return 'tech.radar.Radar : ' + (this.id ? this.id : '(unsaved)');
        return this.name;
    };

    return Radar;
}
