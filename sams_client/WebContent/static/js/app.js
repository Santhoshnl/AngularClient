'use strict';
//Because you can add modules to your application ,you can inject like
//angular.module('myApp', ['ngRoute','ngSanitize']
//What is a Module? You can think of a module as a container for the different parts of your 
//app – controllers, services, filters, directives, etc
var App = angular.module('myApp',[]);
App.constant('URI', 'http://localhost:8080/e_commerce_server_1/')
