(function () {
    var app = angular.module('TravelI', []);

    var route = [{
        source : [

        ],

        destination : [

        ],


    }];
    app.controller('RouteController', function ($scope) {
        $scope.product = route;
    });

})();

/*
List of Cities
 "Florence, Italy",
 "Prague, Czech Republic",
 "Tel Aviv, Israel",
 "Oslo, Norway",
 "Antwerp, Belgium",
 "Salzburg, Austria",
 "Munich, Deutschland",
 "Tokyo, Japan",
 "Kashmir, India",
 "Auckland, New Zealand",
 */