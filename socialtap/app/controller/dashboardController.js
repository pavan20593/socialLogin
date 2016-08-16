app.controller("dashboardCtrl",["$scope","authFactory","$location",function($scope,authFactory,$location){
	
	var userObj = angular.fromJson(authFactory.getUserObj(userObj));

	console.log(userObj);
	 $scope.userObj = userObj;

	var accessToken = authFactory.getAccessToken();
	console.log(accessToken);
	$scope.accessToken = accessToken;

	$scope.FBout = function(){
		
		//FB.logout(); has a bug. i tried using that function i will attach the bug number of the FB.logout() in the mail
					
            authFactory.clearCookie();
            $location.path("/");
            $scope.$apply();
        
    
			
	};
}]);