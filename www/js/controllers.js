angular.module('reddots.controllers', ['ngMap'])

.controller('AppCtrl', function($scope) {
})

.controller('HeaderCtrl', function($scope) {
  $scope.header = header;
})

.controller('LoginCtrl', function($scope) {
  $scope.login = login;
})

.controller('LoginCtrl', function($scope, $stateParams) {

})

.controller('LocationsCtrl', function($scope) {
  $scope.locations = locations;
})

.controller('LocationsCtrl', function($scope, $stateParams) {

})

.controller('CustomerCtrl', function($scope) {
  $scope.createcustomer = create-customer;
})

.controller('CustomerCtrl', function($scope, $stateParams) {

})

.controller('OwnerCtrl', function($scope) {
  $scope.createowner = owner;
})

.controller('OwnerCtrl', function($scope, $stateParams) {

})

.controller('StoreviewCtrl', function($scope) {
    $scope.storeview = storeview;

})

.controller('StoreviewCtrl', function($scope, $stateParams) {

})

.controller('NewordersCtrl', function($scope) {
    $scope.neworders = neworders;
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
})

.controller('NewordersCtrl', function($scope, $stateParams) {

});
