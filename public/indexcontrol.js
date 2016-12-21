var app = angular.module('app',[]);

	app.controller('ctrl',function($scope, $http){
			$http.get('/contactlist').then(function(response){
			$scope.contactlist=response.data;
			$scope.check = function(){
			console.log($scope.Contact);
			var list=$scope.contactlist;
			var len=$scope.contactlist.length;
			console.log(len);
			var flag=false;
			for(var i=0;i<len;i++)
			{
				if($scope.contactlist[i].pwd==$scope.Contact.pwd && $scope.contactlist[i].u_name==$scope.Contact.u_name){
					flag=true;
				}
				
			}
			if(flag==false){
				alert("Wrong id or PWD");
			}
			else{
				
			}
		}
	});
});