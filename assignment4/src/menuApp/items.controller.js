(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  console.log("ItemsController init");

  var categoryItems = this;
  var category = items[$stateParams.categoryId];

  categoryItems.name = category.name;
  categoryItems.quantity = category.quantity;
  categoryItems.description = category.description;
}

})();
