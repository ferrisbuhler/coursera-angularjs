(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menuApp/templates/categoryList.template.html',
  bindings: {
    items: '<'
  }
});

})();
