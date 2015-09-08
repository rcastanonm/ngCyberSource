/**
 * Created by rmendez on 9/7/2015.
 */

app.config(function ($routeProvider) {


    $routeProvider
        .when('/', {
            controller: 'MainController as mC',
            templateUrl: './views/home.html'
        })
        .when('/products', {
            //controller: 'ProductsController',
            templateUrl: './views/products.html',
        })
        .when("/checkout", {
            controller: 'CheckoutController as checkout',
            templateUrl: '/views/checkout.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

