'use strict';
//The scope is the binding part between the HTML (view) and the JavaScript (controller)
//The scope is available for both the view and the controller
angular.module('myApp').controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService) {
    var self = this;
    self.Customer={id:1,firstName:'',lastName:'',email:'',mobile:'',dateOfBirth:''};
    self.validator={message:''};
    $scope.Customerse=[];
    
    self.submit = submit;
    self.GetCustomerse=GetCustomerse;
    self.GetCustomerList=GetCustomerList;
    
    GetCustomerse('1');
    
    function GetCustomerse(id)
    {
    	console.log('exicute Loginunit1 in controller', self.unit);
    	CustomerService.GetCustomer(id)
    	.then
    	(
    	function(response){
    		self.Customer.id=response.id;
    		self.Customer.firstName=response.firstName;
    		self.Customer.lastName=response.lastName;
    		self.Customer.email=response.email;
    		self.Customer.mobile=response.mobile;
    		self.Customer.dateOfBirth=response.dateOfBirth;
    	},
    	function(errResponse){
    		console.error('Error while login unit')
    	}
    	);
    }
    function GetCustomerList(){
    	CustomerService.GetCustomerList()
    	.then(
    			function(d){
    				$scope.Customerse=d;
    			},
    			function(erresponse){
    				
    			}
    		)
    }
    function submit() {
        console.log('Saving New student', self.student);
       
    }

   

}]);
