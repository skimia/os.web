
os.rootScope.$on('osCoreIsLoaded',function(e){
    os.rootScope.fastActionList = [{
        icon :'fa fa-power-off',
        action : function(){
            window.localStorage.removeItem('osToken');
            os.state.go('login');
        },
        name : 'Déconnexion'
    }];
    os.rootScope.fastAction = '<div class="userName">Bonjour <span>'+window.localStorage.username+'</span></div>'+
                              '<ul class="fastAction">'+
                                    '<li ng-repeat="item in fastActionList" ng-click="item.action()"><i ng-class="item.icon" aria-hidden="true"></i>{{item.name}}</li>'+
                              '</ul>';
    os.rootScope.$emit('fastAction',os.rootScope.fastActionList);
});