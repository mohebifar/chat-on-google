'use strict';

angular.module('chatOnGoogleApp')
  .controller('MainCtrl', function ($scope, $http, socket, Upload) {
    $scope.awesomeThings = [];
    $scope.awesomeFiles = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $http.get('/api/files').success(function(awesomeFiles) {
      $scope.awesomeFiles = awesomeFiles;
      socket.syncUpdates('file', $scope.awesomeFiles);
    });

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.addFile = function(file) {
      if(file && file.length) {
        Upload.upload({
          url: '/api/files',
          method: 'POST',
          file: file
        });
      }
    };
  });
