os.module('os.login').controller('login_ctrl',function($scope,$window,$rootScope,$graphQL){
   $rootScope.headTitle = 'Connexion';
   $scope.login = function(form){
       var query = 'mutation ($username: String, $password: String) {identity {authenticate(username: $username, password: $password)}}';
       var variables = {
           username:form.login,
           password:form.password,
       };
       $graphQL.send('http://os-dev.skimiaos-dev.9e7babbb.svc.dockerapp.io:8080/api/graph.ql',query,variables).then(function(data){
            console.log(data);
       })
      /*if(form.login == 'os.root' && form.password == '2580'){
         $window.localStorage.osToken = form.login +':'+ form.password;
         os.state.go('os.dashboard');
      }*/

   }
});