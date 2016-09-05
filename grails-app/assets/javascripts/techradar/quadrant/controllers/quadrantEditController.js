//= wrapped

angular
    .module("techradar.quadrant")
    .controller("QuadrantEditController", QuadrantEditController);

function QuadrantEditController(Quadrant, $stateParams, $state, Item, Radar) {
    var vm = this;

    vm.itemList = Item.list();
    vm.radarList = Radar.list();

    Quadrant.get({id: $stateParams.id}, function(data) {
        vm.quadrant = new Quadrant(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve quadrant with ID " + $stateParams.id}];
    });

    vm.updateQuadrant = function() {
        vm.errors = undefined;
        vm.quadrant.$update(function() {
            $state.go('quadrant.show', {id: vm.quadrant.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
