/**
 * Created by rmendez on 9/7/2015.
 */

app.controller('TabController', ['$scope', '$location', function ($scope,$location) {

    this.tab = 1;

    this.setTab = function (newValue) {
        this.tab = newValue;
    };

    this.isSet = function (tabName) {
        return this.tab === tabName;
    };

    if($location.path().indexOf('products') > 0){
        this.setTab(2);
    }
}]);



