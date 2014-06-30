angular.module('main').controller('CurrentUserController', function($scope) {
  $scope.user = {
    url: '/u/Atko',
    submissionKarma: 100,
    commentKarma: 3849203
  };
});
