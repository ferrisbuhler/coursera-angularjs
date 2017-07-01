(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
        return result.data;
    }).catch(function (error) {
      console.log(error);
    });
  };


  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    }).then(function (result) {
        return result.data;
    }).catch(function (error) {
      console.log(error);
    });
  };
}

})();
