angular.module('speakapp.controllers', [])

.controller('VenueDetailsCtrl', function($scope, $ionicModal, $timeout) {
    //this is just dummy data for the time being
    $scope.venueDetails = {
        id: 0,
        name: 'Test',
        latitude: '4.0000',
        longitude: '5.0000',
        rating: '5',//star rating maybe?
        comments: [
        {
            commentId: 0,
            commentText: 'Lorem Ipsum',
            commentatorId: 0
        },
        {
            commentId: 1,
            commentText: 'Placeholder',
            commentatorId: 1
        },
        {
            commentId: 2,
            commentText: 'Test text',
            commentatorId: 2
        }]
    }

})