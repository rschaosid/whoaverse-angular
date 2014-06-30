angular.module("main").controller("SubmissionListingController", function($scope) {
  $scope.submissions = [{
    title: "Submission title 1",
    url: "http://google.com/",
    rank: 1,
    score: 5,
    domain: "google.com",
    submissionDate: "27.06.2014 21:46:00",
    prettySubmissionDate: "2 days ago",
    author: "Atko",
    subverse: "atko"
  }, {
    title: "Submissian title 2",
    url: "http://gargle.com/",
    rank: 2,
    score: 50,
    domain: "gargle.com",
    submissionDate: "26.06.2014 21:46:00",
    prettySubmissionDate: "7 days ago",
    author: "Akto",
    subverse: "WhoaverseAngular"
  }, {
    title: "Sobmushion titrul 3",
    url: "https://duckduckgo.com/",
    rank: 3,
    score: 500,
    domain: "duckduckgo.com",
    submissionDate: "25.06.2014 21:46:00",
    prettySubmissionDate: "9 days ago",
    author: "Herpderpderpderpderp",
    subverse: "gifs"
  }];
});
