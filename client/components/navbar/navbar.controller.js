'use strict';

angular.module('chatOnGoogleApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      console.log($scope.newThing);
      $http.post('/api/things', { info: $scope.newThing });
      $scope.newThing = '';
    };
  });
