//= wrapped

angular
    .module("techradar.radar")
    .controller("RadarListController", RadarListController);

function RadarListController(Radar) {
    var vm = this;

    var max = 10, offset = 0;

    Radar.list({max: max, offset: offset}, function(data) {
        vm.radarList = data;
    });
}
