angular.module('app').controller('headerController', ['$scope', 'authFactory','$location',

    function($scope, authFactory,$location) {
   var userObj = angular.fromJson(authFactory.getUserObj(userObj));
	 $scope.userObj = userObj;

    }]);