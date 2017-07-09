(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'CustomerService'];
function SignupController(MenuService, CustomerService) {
  var signupCtrl = this;
  signupCtrl.dishValid = false;
  signupCtrl.succeeded = false;

  signupCtrl.customer = CustomerService.getCustomer();

  signupCtrl.submit = function () {
    MenuService.getMenuItem(signupCtrl.customer.dishShortName).then(function(result) {

      if(result.status) {
        signupCtrl.dishValid = false;
        signupCtrl.succeeded = false;
      } else {
        signupCtrl.dishValid = true;
        CustomerService.setCustomer(signupCtrl.customer);

        signupCtrl.succeeded = true;
      }

    });
  };
}
})();
