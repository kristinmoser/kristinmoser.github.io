var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/resume", {
        templateUrl : "/Kristin_Moser_Resume.pdf"
    })
    .when("/about", {
        templateUrl : "/about.html"
    })
    .when("/projects", {
        templateUrl : "projects.html"
    });
});