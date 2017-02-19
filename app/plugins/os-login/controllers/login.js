os.module('os.login').controller('login_ctrl',function($scope,$window,$rootScope){
   $rootScope.headTitle = 'Connexion';
   $scope.login = function(form){
      if(form.login == 'root' && form.password == '258025802580Bast'){
         $window.localStorage.osToken = form.login +':'+ form.password;
         os.state.go('os');
      }

   }
});