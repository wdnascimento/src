(function() {
  'use strict';

  angular
    .module('explorer')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('details', {
        url: '/details/:cep',
        templateUrl: 'app/details/details.html',
        controller: 'DetailsController'
      })
      .state('raffle', {
        url: '/sorteio',
        templateUrl: 'app/raffle/raffle.html',
        controller: 'RaffleController',
        controllerAs: 'vm'
      })
      .state('github', {
        url: '/github',
        templateUrl: 'app/github/github.html',
        controller: 'GithubController',
        controllerAs: 'vm'
      })
      .state('paginate', {
        url: '/paginate',
        templateUrl: 'app/github/pagination.html',
        controller: 'PaginationDemoCtrl',
        
      });

    $urlRouterProvider.otherwise('/');
  }

})();
