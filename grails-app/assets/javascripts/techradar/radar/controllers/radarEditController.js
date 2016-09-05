//= wrapped

angular
    .module("techradar.radar")
    .controller("RadarEditController", RadarEditController);

function RadarEditController(Radar, $stateParams, $state, Quadrant) {
    var vm = this;

    vm.quadrantList = Quadrant.list();

    Radar.get({id: $stateParams.id}, function(data) {
        vm.radar = new Radar(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve radar with ID " + $stateParams.id}];
    });

    vm.updateRadar = function() {
        vm.errors = undefined;
        vm.radar.$update(function() {
            $state.go('radar.show', {id: vm.radar.id});
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
