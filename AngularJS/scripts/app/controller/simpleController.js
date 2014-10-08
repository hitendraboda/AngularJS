var simpleController = function ($scope, ngProgress) {
    ngProgress.set(1);
    ngProgress.start();
    $scope.customers = [
      { name: 'abc', city: 'def' },
      { name: 'ghi', city: 'jkl' },
      { name: 'mno', city: 'pqr' }
    ]
    $scope.addCustomer = function () {
        $scope.customers.push({ name: $scope.newCustomer.name, city: $scope.newCustomer.city });
    };
    ngProgress.complete();
};