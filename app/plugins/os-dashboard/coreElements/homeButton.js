os.rootScope.$on('osCoreIsLoaded',function(e){
    os.rootScope.buttonHome = {
        icon : 'fa fa-bullseye',
        action : function (){
            os.state.go('os.dashboard');
        }
    }
});