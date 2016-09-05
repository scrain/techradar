//= wrapped

angular
    .module("techradar.item")
    .controller("ItemShowController", ItemShowController);

function ItemShowController(Item, $stateParams, $state) {
    var vm = this;

    Item.get({id: $stateParams.id}, function(data) {
        vm.item = new Item(data);
    }, function() {
        $state.go('item.list');
    });

    vm.delete = function() {
        vm.item.$delete(function() {
            $state.go('item.list');
        }, function() {
            //on error
        });
    };

}
