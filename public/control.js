
var app = angular.module('app1',[]);
app.controller('ctrl',function($scope, $http){
	$http.get('/contactlist').then(function(response){
		console.log(response);
		$scope.contactlist=response.data;
	});

	$scope.addContact = function(){
		console.log($scope.Contact);
		$http.post('/contactlist',$scope.Contact);
	}
});