/**
 * Created by rmendez on 9/7/2015.
 */

app.controller('TabController', ['$scope', function ($scope) {

    this.tab = 1;

    this.setTab = function (newValue) {
        this.tab = newValue;
    };

    this.isSet = function (tabName) {
        return this.tab === tabName;
    };

}]);



