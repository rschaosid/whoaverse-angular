angular.module("main").directive("wvSubmissionListitem", function() {
  return {
    restrict: "E",
    templateUrl: "/spa-components/submission-listitem/submission-listitem-partial.html",
    scope: {
      item: "=item"
    }
  };
});
