(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menuApp/templates/items.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
