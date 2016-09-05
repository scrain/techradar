//= wrapped

angular
    .module("techradar.radar")
    .controller("RadarShowController", RadarShowController);

function RadarShowController(Radar, $stateParams, $state, $resource) {
    var vm = this;

    Radar.get({id: $stateParams.id}, function(data) {
        vm.radar = new Radar(data);
    }, function() {
        $state.go('radar.list');
    });

    vm.delete = function() {
        vm.radar.$delete(function() {
            $state.go('radar.list');
        }, function() {
            //on error
        });
    };

    var h = 1000;
    var w = 1200;
    var radar_data = $resource('/radar_data/:radarId').get({radarId: $stateParams.id});
    radar_data.$promise.then(function(data) {
        init(h, w, data);
    });
}
