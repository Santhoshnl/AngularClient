'use strict';

angular.module('myApp').factory('CustomerService', ['$http', '$q', function($http, $q){
	
	var REST_SERVICE_CUSTOMER_URI = 'http://localhost:8080/SpringMVCRESTFulService/customers/';
	var REST_SERVICE_CUSTOMERLIST_URI = 'http://localhost:8080/SpringMVCRESTFulService/customerslist/';
	
	 var factory = {
			 GetCustomer: GetCustomer,
			 GetCustomerList:GetCustomerList
		    };

		    return factory;
	
	function GetCustomer(id){
    	var deferred=$q.defer();
    	console.log("this go to Unit created")
    	$http.get(REST_SERVICE_CUSTOMER_URI+id)
    	.then(
    	 function(response){
    		 deferred.resolve(response.data)
    	 },
    	 function(errResponse){
    		console.error("Error while creating unit")
    		deferred.reject(errResponse)
    	 }
    	 );
    	return deferred.promise;
    }
	
	function GetCustomerList(){
		var deffered=$q.defer();
		$http.get(REST_SERVICE_CUSTOMERLIST_URI)
		.then(
				function(response){
					deffered.resolve(response.data);
				},
				function(erresponse){
					deffered.reject(erresponse);
				}
		);
		return deffered.promise;
	}

}]);