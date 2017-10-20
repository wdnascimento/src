(function() {
  'use strict';

  angular
    .module('explorer')
    .controller('GithubController', GithubController);
      
  function GithubController(GithubUserRepository, GithubUserSearch, $localStorage, $scope, $state, $log, $timeout, $interval, toastr, Github, GithubUser, $http) {
    var vm = this;
   
    /** DEFAULTS  */
    vm.resultado = false;
    vm.resultadousuario = false;
    vm.total = 0;
    vm.maxSize = 5;
    vm.perPage = 50;
    vm.currentPage = 1;
    vm.userSearchTerm = "";
    vm.repositorySearchTerm = "";
    
    vm.dataUsers = [];

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
      
      }, function(result) {
        vm.resultadousuario = false;
        vm.resultado = true;
        vm.dataRepositories = result;
        vm.total = vm.dataRepositories.total_count;
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
        repo: vm.repositorySearchTerm,
        page: vm.currentPage,
        per_page: vm.perPage,
      }, function(result) {
        vm.resultadousuario = false;
        vm.resultado = true;
        vm.dataRepositories = result;
        vm.total = vm.dataRepositories.total_count;
      });
    };

    vm.queryUser = function() {
      GithubUserSearch.get({
        q: vm.userSearchTerm,
        page: vm.currentPage,
        per_page: vm.perPage,
      }, function(result) {
        vm.resultadousuario = true;
        vm.resultado = false;
        vm.dataRepositories = result;
        vm.total = vm.dataRepositories.total_count;
      });
    };

    vm.getResults = function(){
      if((vm.userSearchTerm == '') && (vm.repositorySearchTerm != '')) {
        vm.currentPage =1 ;
        vm.queryRepositories();
      } else if ((vm.userSearchTerm != '') && (vm.repositorySearchTerm == '')){
        vm.currentPage = 1;
        vm.queryUser();
      } else if ((vm.userSearchTerm != '') && (vm.repositorySearchTerm != '')){
        vm.currentPage = 1;
        vm.queryUserRepository();
      }
    }

    vm.pageChanged = function () {
      vm.queryRepositories();
    }

  }
})();




