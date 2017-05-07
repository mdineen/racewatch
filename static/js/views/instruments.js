var RaceWatch = RaceWatch || {};

(function () {
    'use strict';

    var Instrument = Mn.View.extend({
        tagName: 'li',
        template: '#instrumentView',
        className: 'instrument-small',
    }),
    InstrumentPanel = Mn.CollectionView.extend({
        tagName: 'ul',
        id: 'instrumentpanel',
        childView: Instrument,
    }),
    LocalTime = Mn.View.extend({
        template: '#localTimeView',
        className: 'localtime',
    });

    RaceWatch.views = {
        Instrument: Instrument,
        InstrumentPanel: InstrumentPanel,
        LocalTime: LocalTime,
    };

})();
