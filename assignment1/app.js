(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.displayMessage = function () {

      if(!$scope.dishList || numerOfDishes($scope.dishList) == 0) {
			    $scope.message = "Please enter data first";
          $scope.color = "red";
      } else if(isTooMuch($scope.dishList)) {
			    $scope.message = "Too much!";
          $scope.color = "green";
      } else {
			    $scope.message = "Enjoy!";
          $scope.color = "green";
      }
    };
  };

  function isTooMuch(stringToSplit) {
    return numerOfDishes(stringToSplit) > 3;
  }

  function numerOfDishes(stringToSplit) {
    var dishesArray = stringToSplit.split(',');

    var validDishesNo = 0;

    for (var i in dishesArray) {
      if(!isEmpty(dishesArray[i])) {
        validDishesNo++;
      }
    }

    return validDishesNo;
  }

  function isEmpty(str) {
      return (!str || 0 === str.length);
  }
})();

