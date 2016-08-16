app.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : 'views/home/login.html',
		controller : 'homeCtrl'
	})

	.when("/dashboard",{
		templateUrl : 'views/home/dashboard.html',
		controller : 'dashboardCtrl',
		authenticated : true
	})

	.otherwise('/',{
		templateUrl : 'views/home/login.html',
		controller : 'homeCtrl'
	})

}]);

app.run(["$rootScope","$location","authFactory",function($rootScope,$location,authFactory){

	$rootScope.$auth = authFactory;
	$rootScope.$on('$routeChangeStart',function(event,next,current){

		var userAuth = authFactory.getAccessToken();

	// Redirect to login if auth token is not available
	if(next.$$route.authenticated && !userAuth) {
		$location.path('/');
	}

	// Redirect to dashboard if valid auth token is available and user is in an unauthenticated page (login may be)
	if(!next.$$route.authenticated && userAuth) {
		$location.path('/dashboard');
	}
});
}]);