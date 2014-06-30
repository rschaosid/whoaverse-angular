angular.module("main").controller("TabmenuController", function($scope) {
  $scope.availableTabs = [
    {
      label: "hot",
      url: "/"
    },
    {
      label: "new",
      url: "/new/"
    },
    {
      label: "start a discussion",
      url: "/submit/"
    },
    {
      label: "share a link",
      url: "/submit/?linkpost"
    }
  ];
});
