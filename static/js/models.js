var RaceWatch = RaceWatch || {};

(function () {
    'use strict';

    var Position = Backbone.Model.extend({
        defaults: {
            latitude: null,
            longitude: null,
            speed: null,
            timestamp: null,
        },
    });

    RaceWatch.models = {
        Position: Position,
    };
})();
