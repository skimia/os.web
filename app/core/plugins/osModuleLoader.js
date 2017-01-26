os.core.config(function($locationProvider,$stateProvider,$urlRouterProvider){

    $locationProvider.html5Mode(os.config.html5Mode);

    os.routes = $stateProvider;
    os.routerProvider = $urlRouterProvider;
    
});

os.core.run(function($http,$rootScope,$ocLazyLoad,$state,$plugins){
    os.stateProvider = $state;
    $plugins.nb('system').then(function(nb){
        console.log(nb);
    });

    var promise = $http.get('app/plugins/plugins.json').then(function(source){
        for (plugin in source.data){
            switch (source.data[plugin].type){
                case 'core' :
                    os.pluginsCore.push(source.data[plugin]);
                    break;
                case  'system' :
                    os.pluginsSyst.push(source.data[plugin]);
                    break;
                case  'extern' :
                    os.pluginsExt.push(source.data[plugin]);
                    break;
            }
        }
        return source.data;
    });
    promise.then(function(data){
        if (os.pluginsSyst.length){
            var allConfDef = [];

            $.each(os.pluginsSyst,function(key,value){
                $http.get('app/plugins/'+ value.name + '/config.json').then(function(source){
                    allConfDef.push(source.data);
                    if(key == os.pluginsSyst.length - 1){
                        $rootScope.$emit('syncPlugEnd', allConfDef);
                    }
                });
            });

        }
    });
    $rootScope.$on('syncPlugEnd',function(e,allConf){
        var allAssetsDef = [];
        $.each(allConf,function(key,value){
            if(value.assetsBeforeLoad.length){
                $.each(value.assetsBeforeLoad,function(asstKey,asstVal){
                    allAssetsDef.push('app/plugins/' + value.name + asstVal);
                });
            }
            if(value.routing.length){
                var obj = [];
                $.each(value.routing,function(rootKey,rootVal){
                    //add resolve for loading assets if needed on state load
                    if(rootVal.assets.length){
                        $.each(rootVal.assets, function(index, asset){
                            rootVal.assets[index] = 'app/plugins/' + value.name + asset;
                        });
                        rootVal.resolve  = {
                            loadMyScript: ['$ocLazyLoad', function($ocLazyLoad) {
                                return $ocLazyLoad.load(rootVal.assets);
                            }]
                        }
                    }
                    if(rootVal.templateUrl){
                        rootVal.templateUrl = 'app/plugins/'+ value.name+ rootVal.templateUrl;
                    }
                    if(rootVal.views){
                        $.each(rootVal.views,function(viewName,viewValue){
                            viewValue.templateUrl ='app/plugins/'+ value.name + viewValue.templateUrl;
                        });
                    }
                    os.routes.state(rootVal);
                });
            }
            if(value.otherwise && value.otherwise != ""){
                os.routerProvider.otherwise(value.otherwise);
            }
            if(key == allConf.length - 1){
                $rootScope.$emit('syncConfEnd', allAssetsDef);
            }
        });
    });
    $rootScope.$on("syncConfEnd",function (e,allAssetsDef) {
        $ocLazyLoad.load(allAssetsDef);
            $rootScope.$emit('stateInitialized',$state);
    });
});