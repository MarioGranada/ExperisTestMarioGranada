'use strict';
var controllers = angular.module('controllers',['services']);


controllers.controller('StoreCtrl',['$scope','$http','CheckoutService',function($scope,$http, CheckoutService){

    $scope.sailingsTotal=0.00;
    $scope.CruiseLineTemp="";
    $http({method: 'GET', url:'https://api.myjson.com/bins/2gr36'}).success(function(data, status, headers, config){
      CheckoutService.Checkout.setCruiseLinesList(data.cruise_lines);
      CheckoutService.Checkout.setSailingsList(data.sailings);
      $scope.Checkout=CheckoutService.Checkout;

      $scope.sumarizeAllCheckedRadios=function(){
        // console.log("click");
        var sailingsT=0;
        var allRadios=$('input[type=radio]:checked');
        for (var i = 0; i < allRadios.length; i++) {
          // console.log("here");
          // console.log($(allRadios[i]).val());
          sailingsT += parseInt($(allRadios[i]).val());
        };
        $scope.sailingsTotal=sailingsT;
        
      }
    }).error(function(data, status, headers, config){
      console.log("Error loading Sailings");
    });
}]);