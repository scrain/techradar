//= wrapped
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

angular.module("techradar.item", [
    "ui.router",
    "ngResource",
    "techradar.core",
    "techradar.quadrant"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('item', {
            url: "/item",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('item.list', {
            url: "",
            templateUrl: "/techradar/item/list.html",
            controller: "ItemListController as vm"
        })
        .state('item.create', {
            url: "/create",
            params: {"quadrantId":null},
            templateUrl: "/techradar/item/create.html",
            controller: "ItemCreateController as vm"
        })
        .state('item.edit', {
            url: "/edit/:id",
            templateUrl: "/techradar/item/edit.html",
            controller: "ItemEditController as vm"
        })
        .state('item.show', {
            url: "/show/:id",
            templateUrl: "/techradar/item/show.html",
            controller: "ItemShowController as vm"
        });
}
