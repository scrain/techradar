//= wrapped

angular
    .module("techradar.quadrant")
    .controller("QuadrantListController", QuadrantListController);

function QuadrantListController(Quadrant) {
    var vm = this;

    var max = 10, offset = 0;

    Quadrant.list({max: max, offset: offset}, function(data) {
        vm.quadrantList = data;
    });
}
