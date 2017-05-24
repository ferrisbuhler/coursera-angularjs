(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController)
  .controller('ToBuyListController', ToBuyListController)
  .controller('AlreadyBoughtListController', AlreadyBoughtListController)
  .filter('showMessage', messageFilterFactory);
  
  // initial shopping list for a Bavarian breakfast party for 10 persons
  var initialShoppingList = [
    {
      name: "Weisswuerste (Stueck)",
      quantity: "20"
    }, {
      name: "Obatzda (g)",
      quantity: "500"
    }, {
      name: "Suesser Senf (g)",
      quantity: "100"
    }, {
      name: "Brez'n (Stueck)",
      quantity: "25"
    }, {
      name: "Rettich (g)",
      quantity: "500"
    }, {
      name: "Weissbier (l)",
      quantity: "10"
    }
  ];
  
  // parent controller
  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController($scope) {
    $scope.alreadyBoughtList = [];
  };

  // child controller 1 - controlls the "to buy" list and the "bought" button
  ToBuyListController.$inject = ['$scope'];
  function ToBuyListController($scope) {
    $scope.toBuyList = initialShoppingList;
    
    $scope.boughItem = function (index) {
      var itemsInTransfer = $scope.toBuyList.splice(index, 1);
      $scope.alreadyBoughtList.push(itemsInTransfer[0]);
    }
  };

  // child controller 2 - controlls the "already bought" list
  AlreadyBoughtListController.$inject = ['$scope'];
  function AlreadyBoughtListController($scope) {
  
  };

  // factory for message filter
  function messageFilterFactory() {
    // supress the message unless the list length is 0
    return function (message, len) {
      if(len == 0) {
        return message;
      } else {
        return "";
      }
    }
  };


})();

