os.module('os.login').controller('login_ctrl',function($scope,$window,$rootScope){
   $rootScope.headTitle = 'Connexion';
   $scope.login = function(form){
      if(form.login == 'os.root' && form.password == '2580'){
         $window.localStorage.osToken = form.login +':'+ form.password;
         os.state.go('os.dashboard');
      }

   }
});