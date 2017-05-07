var RaceWatch = RaceWatch || {};

(function () {
    'use strict';

    var App = Mn.Application.extend({
        setRootLayout: function () {
            this.root = new RaceWatch.RootLayout();
        }
    });

    RaceWatch.App = new App();

    RaceWatch.App.on('before:start', function () {
        RaceWatch.App.setRootLayout();
    });

})();
