//= wrapped

angular
    .module("techradar.quadrant")
    .controller("QuadrantShowController", QuadrantShowController);

function QuadrantShowController(Quadrant, $stateParams, $state) {
    var vm = this;

    Quadrant.get({id: $stateParams.id}, function(data) {
        vm.quadrant = new Quadrant(data);
    }, function() {
        $state.go('quadrant.list');
    });

    vm.delete = function() {
        vm.quadrant.$delete(function() {
            $state.go('quadrant.list');
        }, function() {
            //on error
        });
    };

}
