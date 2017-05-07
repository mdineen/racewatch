var RaceWatch = RaceWatch || {};

$(function () {
    'use strict';

    RaceWatch.App.on('start', function () {
        var controller = new RaceWatch.Controller();
        controller.router = new RaceWatch.Router({
            controller: controller
        });

        RaceWatch.currentPosition = new RaceWatch.models.Position();
        
        var updatePosition = function(pos) {
            RaceWatch.currentPosition.set({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                speed: pos.coords.speed,
                timestamp: pos.timestamp,
            });
        };

        controller.start();
        Backbone.history.start();

        navigator.geolocation.watchPosition(updatePosition);
    });

    RaceWatch.App.start();
});
