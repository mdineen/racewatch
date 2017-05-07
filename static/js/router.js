var RaceWatch = RaceWatch || {};

(function () {
    'use strict';

    var filterChannel = Backbone.Radio.channel('filter');

    RaceWatch.Router = Mn.AppRouter.extend({
        appRoutes: {
            '*filter': 'filterItems'
        }
    });

    RaceWatch.Controller = Mn.Object.extend({

        initialize: function () {
            console.log('initialize controller', this);
            //this.todoList = new RaceWatch.TodoList();
        },

        start: function () {
            console.log('start controller', this);
            //this.showHeader(this.todoList);
            //this.showFooter(this.todoList);
            //this.showTodoList(this.todoList);
            //this.todoList.on('all', this.updateHiddenElements, this);
            //this.todoList.fetch();
            this.showInstruments();
        },

        showInstruments: function () {
            var panel = new RaceWatch.views.InstrumentPanel();

            RaceWatch.App.root.showChildView('main', panel);
        },

        //updateHiddenElements: function () {
            //$('#main, #footer').toggle(!!this.todoList.length);
        //},

        //showHeader: function (todoList) {
            //var header = new RaceWatch.HeaderLayout({
                //collection: todoList
            //});
            //RaceWatch.App.root.showChildView('header', header);
        //},

        ////showFooter: function (todoList) {
            //var footer = new RaceWatch.FooterLayout({
                //collection: todoList
            //});
            //RaceWatch.App.root.showChildView('footer', footer);
        //},

        ////showTodoList: function (todoList) {
            //RaceWatch.App.root.showChildView('main', new RaceWatch.ListView({
                //collection: todoList
            //}));
        //},

        ////// Set the filter to show complete or all items
        filterItems: function (filter) {
            console.log('filterItems', this);
            //var newFilter = filter && filter.trim() || 'all';
            //filterChannel.request('filterState').set('filter', newFilter);
        }
    });
})();
