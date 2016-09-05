//= wrapped

angular
    .module("techradar.item")
    .controller("ItemListController", ItemListController);

function ItemListController(Item) {
    var vm = this;

    var max = 10, offset = 0;

    Item.list({max: max, offset: offset}, function(data) {
        vm.itemList = data;
    });
}
