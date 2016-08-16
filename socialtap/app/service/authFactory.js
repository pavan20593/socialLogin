app.factory("authFactory",["$cookies","$location",function($cookies,$location){
	var authFactory = {};

	authFactory.setAccessToken = function(accessToken){
		$cookies.put("accessToken",accessToken);
	}

	authFactory.getAccessToken = function(){
		return $cookies.get("accessToken");
	}

	authFactory.getUserObj = function(){
		var userObj = $cookies.get('userObj');

		if(userObj){
			return userObj;
		}
		else {
			console.log("error");
		}
	}

	authFactory.clearCookie = function(){

		$cookies.remove("accessToken");
		$cookies.remove("userObj");
		
	}

	
	authFactory.isAuthenticated = function(){
		var isLoggedIn=$cookies.get("accessToken")?true:false;
		return isLoggedIn;
	}
	return authFactory;
}]);