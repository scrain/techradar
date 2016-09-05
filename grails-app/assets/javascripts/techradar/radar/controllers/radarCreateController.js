//= wrapped

angular
    .module("techradar.radar")
    .controller("RadarCreateController", RadarCreateController);

function RadarCreateController(Radar, $state, Quadrant) {

    var vm = this;
    vm.quadrantList = Quadrant.list();
    vm.radar = new Radar();
    
    vm.saveRadar = function() {
        vm.errors = undefined;
        vm.radar.$save({}, function() {
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
