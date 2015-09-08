/**
 * Created by rmendez on 9/7/2015.
 */
(function(){

    var app = angular.module('store-directives', []);

    app.directive("productDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "views/directives/productDescription/product-description.html"
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: "views/directives/productReviews/product-reviews.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict:"A",
            templateUrl: "views/directives/productSpecs/product-specs.html"
        };
    });

    app.directive("productTabs", function() {
        return {
            restrict: "E",
            templateUrl: "views/directives/productTabs/product-tabs.html",
            controller: function() {
                this.tab = 1;

                this.isSet = function(checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });

    app.directive("productGallery", function() {
        return {
            restrict: "E",
            templateUrl: "views/directives/productGallery/product-gallery.html",
            controller: function() {
                this.current = 0;
                this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: "gallery"
        };
    });
})();
