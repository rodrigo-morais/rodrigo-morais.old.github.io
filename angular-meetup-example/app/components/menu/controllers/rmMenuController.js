define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmMenuController = function ($scope) {
        $scope.menus = [{
            text: "Show Member",
            link: "/angular-meetup-example/#member",
            selected: false
        }, {
            text: "Token Data",
            link: "/angular-meetup-example/#token",
            selected: false
        }];

        $scope.select = function (menu) {
            $scope.menus.forEach(function (_menu) {
                _menu.selected = false;
            });
            menu.selected = true;
        };
    };

    rmMenuController.$inject = ["$scope"];

    module.exports = rmMenuController;
});