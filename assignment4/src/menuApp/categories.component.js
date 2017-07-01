(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menuApp/templates/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
