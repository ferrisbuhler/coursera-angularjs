(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      term: '<',
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  var searchTerm = "";
  var showTerm = "";
  var found = [];

  ctrl.startSearch = function () {
    ctrl.showTerm = ctrl.searchTerm;
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

    promise.then(function (response) {
      ctrl.found = response;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  ctrl.hasResult = function () {
    return ctrl.found && ctrl.found.length > 0;
  };

  ctrl.removeItem = function (index) {
    console.log("removeItem #", index);
    ctrl.found.splice(index, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        // process result and only keep items that match
        var foundItems = [];

        if(searchTerm && result.data.menu_items) {
          for (var i = 0; i < result.data.menu_items.length; i++) {
            var desc = result.data.menu_items[i].description;
            if (desc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }
        }

        // return processed items
        return foundItems;
    })
    .catch(function (error) {
      console.log(error);
    });
  };

}
})();
