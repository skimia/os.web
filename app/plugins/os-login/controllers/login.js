alert('la');
angular.module('os.plugins').controller('login_ctrl',function($scope,$window,$state,$rootScope){
   alert('la');
   $rootScope.headTitle = 'Connexion';
   $scope.login = function(form){
      if(form.login == 'root' && form.password == '258025802580Bast'){
         $window.localStorage.osToken = form.login +':'+ form.password;
         $state.go('os');
      }

   }
});