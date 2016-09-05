//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /techradar/core/techradar.core
//= require /techradar/item/techradar.item
//= require /techradar/radar/techradar.radar
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("techradar.quadrant", [
    "ui.router",
    "ngResource",
    "techradar.core",
    "techradar.item",
    "techradar.radar"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('quadrant', {
            url: "/quadrant",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('quadrant.list', {
            url: "",
            templateUrl: "/techradar/quadrant/list.html",
            controller: "QuadrantListController as vm"
        })
        .state('quadrant.create', {
            url: "/create",
            params: {"radarId":null},
            templateUrl: "/techradar/quadrant/create.html",
            controller: "QuadrantCreateController as vm"
        })
        .state('quadrant.edit', {
            url: "/edit/:id",
            templateUrl: "/techradar/quadrant/edit.html",
            controller: "QuadrantEditController as vm"
        })
        .state('quadrant.show', {
            url: "/show/:id",
            templateUrl: "/techradar/quadrant/show.html",
            controller: "QuadrantShowController as vm"
        });
}
