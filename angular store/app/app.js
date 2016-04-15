'use strict';

// Declare app level module which depends on views, and components
angular.module('angularStore', [
  'ngRoute',
  'angularStore.view1',
  'angularStore.view2',
  'angularStore.templates'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
