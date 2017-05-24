(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .controller('ToBuyListController', ToBuyListController)
  .controller('AlreadyBoughtListController', AlreadyBoughtListController);
  
  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController($scope) {
  
  };

  ToBuyListController.$inject = ['$scope'];
  function ToBuyListController($scope) {
  
  };

  AlreadyBoughtListController.$inject = ['$scope'];
  function AlreadyBoughtListController($scope) {
  
  };


})();

