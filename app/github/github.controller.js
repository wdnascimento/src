(function() {
  'use strict';

  angular
    .module("explorer")
    .controller('GithubController', GithubController);
                            
  function GithubController(GithubUserRepository, GithubUserSearch, $localStorage, $scope, $state, $log, $timeout, $interval, toastr, Github, GithubUser, $http, leafletData) {
    var vm = this;
   
    /** DEFAULTS  */
    vm.resultado = false;
    vm.total = 0;
    vm.maxSize = 5;
    vm.perPage = 50;
    vm.dados = [{}];
    vm.currentPage = 1;

    /** DEFAULTS  */


    vm.eq = {
      name: 'equals!'
    };
    vm.at = {
      name: 'at!'
    };
    vm.and = function() {
      console.log('teste');
    };
    vm.queryRepositories = function() {
      Github.get({
        q: vm.repositorySearchTerm,
        page: vm.currentPage,
        per_page:vm.perPage,
        limit:500

      }, function(result) {
        vm.resultado = true;
        vm.dados = result;
        vm.total = vm.dados.total_count;
        console.log();
      });
    };
    vm.queryUserRepos = function() {
      GithubUser.query({
        username: vm.userSearchTerm
      }, function(result) {
        console.log(result);
      });
    };
    vm.queryUserRepository = function() {
      GithubUserRepository.get({
        username: vm.userSearchTerm,
        repo: vm.repositorySearchTerm
      }, function(result) {
        console.log(result);
      });
    };

    vm.queryUser = function() {
      GithubUserSearch.get({
        q: vm.userSearchTerm
      }, function(result) {
        console.log(result);
      });
    };

    vm.getResults = function(){
      vm.currentPage =1 ;
      vm.queryRepositories();
    }

    vm.pageChanged = function () {
      vm.queryRepositories();
    }
  }

})();




