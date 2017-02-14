(function() { 
    function config ($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeController as home',
                templateUrl: '/templates/home.html'
        });  
    }
    
    angular
        .module('blocChat', ['ui.bootstrap','ui.router', 'firebase'])
        .config(config);
})();