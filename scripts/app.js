/**
 * Main AngularJS Web Application
 */
'use strict';

var app = angular.module('experisTestApp',['ngRoute','controllers']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when("/store",{
      templateUrl:'views/home.html',
      controller: 'StoreCtrl'
    }).
    otherwise({
      redirectTo: "/store"
    });
}]);