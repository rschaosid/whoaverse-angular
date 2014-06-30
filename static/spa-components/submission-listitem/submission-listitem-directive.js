angular.module("main").directive("wvSubmissionListitem", function() {
  return {
    restrict: "E",
    templateUrl: "/submission-listitem/submission-listitem-partial.html",
    scope: {
      item: "=item"
    }
  };
});
