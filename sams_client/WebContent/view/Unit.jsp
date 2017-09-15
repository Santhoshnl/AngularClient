<!DOCTYPE html>
<html>
<head>
   <style type="text/css">
   .coltitle{
   background-color:gray;
   color: white;
   }
   .coldetail{
   background:green;
   color: white;
   }
   </style>
</head>
<body ng-app="myApp" class=ng-cloak>
      <div class="generic-container" ng-controller="CustomerController as ctrl">
            <table>
            <td>
            <a href="#" ng-click="ctrl.GetCustomerse(1)">Id: 1</a><td>
            <tr></tr>
            <td><a href="#" ng-click="ctrl.GetCustomerse(2)">Id: 2</a></td>
            <tr></tr>
            <td><a href="#" ng-click="ctrl.GetCustomerse(3)">Id: 3</a><td>
            <tr></tr>
            <td><a href="#" ng-click="ctrl.GetCustomerList()">All</a><td>
            </table>
            <table>
            <td class="coltitle">Customer id</td><td class="coltitle">First name</td><td class="coltitle">Last nane</td><td class="coltitle">Email</td><td class="coltitle">Mobile</td><td class="coltitle">Date of birth</td>
            <tr></tr>
            <td class="coldetail">{{ctrl.Customer.id}}</td><td class="coldetail">{{ctrl.Customer.firstName}}</td><td class="coldetail">{{ctrl.Customer.lastName}}</td ><td class="coldetail">{{ctrl.Customer.email}}</td><td class="coldetail">{{ctrl.Customer.mobile}}</td><td class="coldetail">{{ctrl.Customer.dateOfBirth}}</td>
            </table>
		            
		 <table>
		  <tr ng-repeat="x in Customerse">
		    <td>{{ x.id }}</td>
		    <td>{{ x.firstName }}</td>
		    <td>{{ x.lastName }}</td>
		    <td>{{ x.email }}</td>
		    <td>{{ x.mobile }}</td>
		    <td>{{ x.dateOfBirth }}</td>
		  </tr>
		</table>           
      </div>
      <script src="/sams_client/static/js/library/angular.min.js"></script>
      <script src="/sams_client/static/js/app.js"></script>
      <script src="/sams_client/static/js/service/Customer_service.js"></script>
      <script src="/sams_client/static/js/controller/Customer_controller.js"></script>
</body>
</html>