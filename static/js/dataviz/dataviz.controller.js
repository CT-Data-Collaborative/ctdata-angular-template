angular.module('app')
.controller('DataVizController',
    ['$scope', '$http', '$log', 'sidebarDisplay', 'categories', 'lodash',
    function($scope, $http, $log, sidebarDisplay, categories, lodash){
        var lo = lodash;
        $scope.toggle = sidebarDisplay.toggle;
        $scope.categories = categories.list;

        $scope.$watch(function() {
            return $scope.categories;
        }, function() {
            console.log("Selection Detected");
        }, true);
}])
