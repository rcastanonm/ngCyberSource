/*
 * Main App Module - Developed by
 * @author Rolando Castanon Mendez
 * @email rcastanonm@gmail.com
 *
 * Including ngCart module from:
 * Dan Shreim
 * @snapjay
 * http://snapjay.com
 */
var app = angular.module("mainApp", ["ngCart", "ngRoute"]);

app.controller("InitializeNGCart", ['$scope', 'ngCart', function ($scope, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
}]);
