//= wrapped
//= require /angular/angular
//= require /techradar/core/techradar.core
//= require /techradar/index/techradar.index
//= require /techradar/radar/techradar.radar
//= require /techradar/quadrant/techradar.quadrant
//= require /techradar/item/techradar.item

angular.module("techradar", [
    "techradar.core",
    "techradar.index",
    "techradar.radar",
    "techradar.quadrant",
    "techradar.item"
]);
