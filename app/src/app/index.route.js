(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider.
    when('/location',{
      templateUrl: 'app/CheckIn/Location.html',
      controller: 'locationController'
    }).
    otherwise({redirectTo: '/location'});

  }

})();
