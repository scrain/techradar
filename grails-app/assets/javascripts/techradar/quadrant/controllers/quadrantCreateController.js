//= wrapped

angular
    .module("techradar.quadrant")
    .controller("QuadrantCreateController", QuadrantCreateController);

function QuadrantCreateController(Quadrant, $state, $stateParams, Item, Radar) {

    var vm = this;
    vm.itemList = Item.list();
    vm.radarList = Radar.list();
    vm.quadrant = new Quadrant();
    
    if ($stateParams.radarId) {
        vm.quadrant.radar = {id: $stateParams.radarId};
    }
    
    vm.saveQuadrant = function() {
        vm.errors = undefined;
        vm.quadrant.$save({}, function() {
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
