﻿var siatApp = angular.module('siatApp', ['ngRoute']);

// configure our routes
siatApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
});

// create the controller and inject Angular's $scope
siatApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

siatApp.controller('aboutController', function ($scope) {
    $scope.message = 'Aqui debe de ir la informacion correspondiente a la pagina "Acerca de"';
});