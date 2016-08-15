angular.module('venues.controllers', [])

.controller('VenuesCtrl', function($scope, $ionicModal, $timeout) {
	
    //this is just dummy data for the time being
    $scope.venues = [
        { name: 'Casa do Lukas', id: 0 },
        { name: 'Casa do Doug', id: 1 },
        { name: 'Star Pizza', id: 2 },
        { name: 'Romayos', id: 3 },
        { name: 'Flyefit', id: 4 },
        { name: 'O`Reillys', id: 5 },
        { name: 'Porter House', id: 6 }
    ];

});
