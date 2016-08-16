app.controller('homeCtrl',["$scope","authFactory","$location","$cookieStore",function($scope,authFactory,$location,$cookieStore){
	$scope.name = "login Please";

	$scope.FBLogin = function(){
		
		FB.login(function(response) {


			console.log(response);
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
     	
        console.log(response);
     	
       console.log('Good to see you, ' + response.name + '.');
       $cookieStore.put("userObj",response);
       var accessToken =  FB.getAuthResponse().accessToken;
      authFactory.setAccessToken(accessToken);

      $location.path("/dashboard");
      $scope.$apply();

     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }

});

	};



}]);