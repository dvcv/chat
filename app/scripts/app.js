(function() {

    function config($locationProvider, $stateProvider) {
       $locationProvider
           .html5Mode({
               enabled: true, //the hashbang URLs are disabled
               requireBase: false //avoids a common $location error
           });

       $stateProvider
           .state('home', {
               url: '/',
               controller: 'HomeCtrl as home',
               templateUrl: '/templates/home.html'
           });
    }
    angular
        .module('chat', ['ui.router', 'firebase', 'ui.bootstrap','ngAnimate'])
        .config(config);
})();
