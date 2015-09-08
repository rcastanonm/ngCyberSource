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
var app = angular.module("mainApp", ["ngCart", "ngRoute", "store-directives"]);

app.controller("StoreController", ['$scope', '$http', 'ngCart',  function ($scope, $http) {
    //ngCart.setTaxRate(7.5);
    //ngCart.setShipping(2.99);

    var store = this;
    store.products = [];

    $http.get('files/store-products.json').success(function(data){
        store.products = data;
    });


}]);

app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
        product.reviews.push(this.review);

        this.review = {};
    };
});