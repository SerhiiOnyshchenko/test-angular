var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.value1 = 0;
  $scope.value2 = $scope.value1;
});
console.log(value1);
