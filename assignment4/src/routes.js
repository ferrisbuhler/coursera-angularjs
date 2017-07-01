(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/templates/home.template.html'
  })

  // categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuApp/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuService', function (MenuService) {
        return MenuService.getItems();
      }]
    }
  })

  .state('categories.categoryItems', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menuApp/templates/items.template.html',
    controller: "ItemsController as categoryItems"
  });

}

})();
