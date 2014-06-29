/* global angular */

angular.module('main').controller('SubmissionListController', function($scope) {
  $scope.submissions = [{
    title: 'Submission title 1',
    url: 'http://google.com/'
  }, {
    title: 'Submissian title 2',
    url: 'http://gargle.com/'
  }, {
    title: 'Sobmushion titrul 3',
    url: 'https://duckduckgo.com/'
  }];
});
