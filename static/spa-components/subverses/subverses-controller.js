angular.module("main").controller("SubversesController", function($scope) {
  $scope.defaultSubverses = [
    "newsubverses",
    "funny",
    "news",
    "videos",
    "technology",
    "science",
    "music",
    "gaming",
    "aww",
    "books",
    "gifs",
    "sports",
    "tv",
    "programming",
    "cats",
    "movies",
    "politics",
    "askwhoa",
    "pics",
    "ideasforwhoaverse",
    "introductions",
  ].map(function(name) {
    return {
      name: name,
      url: "/v/"+name+"/"
    };
  });
});
