os.module('os.login').controller('login_ctrl',function($scope,$window,$rootScope,$graphQL){
   $rootScope.headTitle = 'Connexion';
   $scope.login = function(form){
       var query = 'mutation {identity {authenticate(username:"'+form.login+'", password: "'+form.password+'")}}';
       $graphQL.send(query, {}).then(function(data){
            console.log(data);
            if(data.identity.authenticate != 'error') {
                
                window.localStorage.osToken = form.login +':'+ form.password;
                window.localStorage.username = form.login;
                os.state.go('os.dashboard');
            }
            
       });
       
      /*if(form.login == 'os.root' && form.password == '2580'){
         $window.localStorage.osToken = form.login +':'+ form.password;
         os.state.go('os.dashboard');
      }*/

   }
});