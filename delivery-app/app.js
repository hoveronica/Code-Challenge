/*
* This will be how I implement AngularJS module to parse external JSON data.
* But due to time constraint, I am not able to finish it.
*/
var app = angular.module('FoodsbyApp', []);

app.controller('MyController', function MyController($scope,$http){
  $http.get('Monday.json').then(function(response){
  $scope.deliveries = response.data;
  });
})
