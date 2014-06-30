angular.module("main").controller("SubmissionListitemController", function($scope) {
  $scope.upvote = function() {
    $scope.item.score++;
  };
  $scope.downvote = function() {
    $scope.item.score--;
  };
});
