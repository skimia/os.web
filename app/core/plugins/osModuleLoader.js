os.core.config(function($locationProvider,$stateProvider,$urlRouterProvider){
    $locationProvider.html5Mode(os.config.html5Mode);
    os.routes = $stateProvider;
    os.routerProvider = $urlRouterProvider;
    
});

os.core.run(function($rootScope,$ocLazyLoad,$state,$plugins){
    os.stateProvider = $state;

    $plugins.getAll().then(function(refPlugins){
        $plugins.addRef(refPlugins);
        $rootScope.$emit('refPluginLoaded',refPlugins);
    });

    $plugins.getRouting().then(function(router){
       var states = $plugins.checkRout(router);
       $rootScope.$emit('routingLoaded',states);
    });
    $rootScope.$on('routingLoaded',function(e,states){
        $.each(states,function(key,value){
            os.routes.state(value);
        });

        $plugins.getAssetsBeforeLoad().then(function(assetsBefore){
            var allAssetsDefault = $plugins.loadAssetsDefault(assetsBefore);
            $ocLazyLoad.load(allAssetsDefault);
            $rootScope.$emit('assetsBeforeLoadLoaded',allAssetsDefault);
        });
    });


   /* */


});
