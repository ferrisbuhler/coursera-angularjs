(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'CustomerService', 'ApiPath'];
  function MyInfoController(MenuService, CustomerService, ApiPath) {
    var myInfoCtrl = this;
    myInfoCtrl.basePath = ApiPath;
    myInfoCtrl.hasCustomer = false;

    myInfoCtrl.customer = CustomerService.getCustomer();

    if(myInfoCtrl.customer) {
      myInfoCtrl.hasCustomer = true;

      console.log("myInfoCtrl.customer:", myInfoCtrl.customer);

      MenuService.getMenuItem(myInfoCtrl.customer.dishShortName)
      .then(function(result) {
//        console.log("myInfoCtrl.favDish:", result);
        myInfoCtrl.menuItem = result;
      });
    }

  }
})();
