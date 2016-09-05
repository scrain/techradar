//= wrapped

angular
    .module("techradar.item")
    .controller("ItemCreateController", ItemCreateController);

function ItemCreateController(Item, $state) {

    var vm = this;
    
    vm.item = new Item();
    
    vm.saveItem = function() {
        vm.errors = undefined;
        vm.item.$save({}, function() {
            $state.go('item.show', {id: vm.item.id});
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
