(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'CustomerService'];
function SignupController(MenuService, CustomerService) {
  var signupCtrl = this;
  signupCtrl.dishValid = false;
  signupCtrl.succeeded = false;

  signupCtrl.submit = function () {
    MenuService.getMenuItem(signupCtrl.customer.dishShortName).then(function(result) {
      signupCtrl.menuItem = result;

      console.log("signupCtrl.submit - menuItem:", signupCtrl.menuItem);

      if(signupCtrl.menuItem.status) {
        signupCtrl.dishValid = false;
        signupCtrl.succeeded = false;
      } else {
        signupCtrl.dishValid = true;
        CustomerService.setCustomer(signupCtrl.customer);

        console.log("signupCtrl.storeCustomer:", CustomerService.getCustomer());

        signupCtrl.succeeded = true;
      }

    });

    
  };
}
})();
