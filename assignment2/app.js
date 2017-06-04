(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
  // controller 1 - controlls the "to buy" list and the "bought" button
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    
    toBuy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    }
    
    toBuy.items = ShoppingListCheckOffService.getToBuyList();
  };

  // controller 2 - controlls the "already bought" list
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();
  };
  
  // singleton service controlling both shopping lists
  function ShoppingListCheckOffService() {
    var service = this;

    // shopping list for a Bavarian breakfast party for 10 persons
    var toBuyList = [
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
  
    var alreadyBoughtList = [];
    
    service.buyItem = function (index) {
      var itemsInTransfer = toBuyList.splice(index, 1);
      alreadyBoughtList.push(itemsInTransfer[0]);
    };
    
    service.getToBuyList = function() {
      return toBuyList;
    };

    service.getAlreadyBoughtList = function() {
      return alreadyBoughtList;
    };
  }

})();

