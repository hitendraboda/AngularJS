var routeConfig = function ($routeProvider) {
    $routeProvider
    .when('/view1', {
        controller: 'simpleController',
        templateUrl: 'Partials/View1.html'
    })
        .when('/view2', {
            controller: 'simpleController',
            templateUrl: 'Partials/View2.html'
        })
    .otherwise({ redirectTo: '/view1' });
};