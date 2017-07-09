(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signupCtrl = this;

  signupCtrl.submit = function () {
    signupCtrl.completed = true;
  };
}
})();
