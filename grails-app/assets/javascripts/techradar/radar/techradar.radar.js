//= wrapped
//= require /jquery/jquery
//= require /protovis/protovis-d3.2
//= require /utils
//= require /lodash.underscore.min
//= require /radar
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /techradar/core/techradar.core
//= require /techradar/quadrant/techradar.quadrant
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("techradar.radar", [
    "ui.router",
    "ngResource",
    "techradar.core",
    "techradar.quadrant"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('radar', {
            url: "/radar",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('radar.list', {
            url: "",
            templateUrl: "/techradar/radar/list.html",
            controller: "RadarListController as vm"
        })
        .state('radar.create', {
            url: "/create",
            templateUrl: "/techradar/radar/create.html",
            controller: "RadarCreateController as vm"
        })
        .state('radar.edit', {
            url: "/edit/:id",
            templateUrl: "/techradar/radar/edit.html",
            controller: "RadarEditController as vm"
        })
        .state('radar.show', {
            url: "/show/:id",
            templateUrl: "/techradar/radar/show.html",
            controller: "RadarShowController as vm"
        });
}
