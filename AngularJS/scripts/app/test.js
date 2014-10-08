var demoApp = angular.module('demoApp', ['ngRoute']);
var controller = {};
controller.SimpleController = function ($scope) {
    $scope.customers = [
        { name: 'Rumit Parakhiya', city: 'Mandal Kundala' },
        { name: 'Hitendra Boda', city: 'Sarapdad' },
        { name: 'Ashish Aapaliya', city: 'Daveli' }
    ]
    $scope.addCustomer = function () {
        $scope.customers.push({ name: $scope.newCustomer.name, city: $scope.newCustomer.city });
    };
};
demoApp.controller(controller);

demoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/view1', {
        controller: 'SimpleController',
        templateUrl: 'Partials/View1.html'
    })
        .when('/view2', {
            controller: 'SimpleController',
            templateUrl: 'Partials/View2.html'
        })
    .otherwise({ redirectTo: '/view1' });
});
