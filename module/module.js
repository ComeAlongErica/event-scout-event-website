"use strict";

angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {
            template: "<home></home>"
        })
        .when("/bucket-list", {
            template: "<bucket-list></bucket-list>"
        })
        .when("/event-list", {
            template: "<event-list></event-list>"
        })
        .otherwise({redirectTo:"/home"})
    }])
