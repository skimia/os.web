os.core.config(function($locationProvider,$stateProvider,$urlRouterProvider){
    $locationProvider.html5Mode(os.config.html5Mode);
    os.stateProvider = $stateProvider;
    os.urlRouterProvider = $urlRouterProvider;
    
});

os.core.run(function($rootScope,$ocLazyLoad,$state,$plugins){
    os.state = $state;
    os.rootScope = $rootScope;

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
            os.stateProvider.state(value);
        });
        $plugins.getRoutOtherwise().then(function(data){
            os.urlRouterProvider.otherwise(data.otherwise);
        });
        $plugins.getAssetsBeforeLoad().then(function(assetsBefore){
            var allAssetsDefault = $plugins.loadAssetsDefault(assetsBefore);
            $ocLazyLoad.load(allAssetsDefault);
            $rootScope.$emit('assetsBeforeLoadLoaded',allAssetsDefault);
        });
    });
});
