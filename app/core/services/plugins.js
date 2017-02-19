
os.core.factory('$plugins',function($http){
    var $plugins = {
        getAll : function(){
        return $http.get('mock/allPlugins.json').then(function(source){
            return source.data
        });
    },
        getAssetsBeforeLoad : function (){
            return $http.get('mock/assetsBeforeLoadPlugins.json').then(function(source){
                return source.data
            });
        },
        getRouting : function (){
            return $http.get('mock/routingPlugins.json').then(function(source){
                return source.data
            });
        },
        checkRout : function (router){
            var obj = [];
            for (routKey in router){
                var currRout = router[routKey];
                for(currRoutKey in currRout){
                    var routing = currRout[currRoutKey];
                    if(currRoutKey == 'otherwise'){
                        os.routerProvider.otherwise(routing);
                    }else{
                        var setAssets = [];
                        for(assets in routing.assets){
                            setAssets.push('app/plugins/' + currRoutKey + routing.assets[assets]);

                        }
                        for(view in routing.views){
                            routing.views[view].templateUrl = 'app/plugins/' + currRoutKey + routing.views[view].templateUrl;
                        }
                        routing.resolve  = {
                            loadMyScript: function($ocLazyLoad) {
                                return $ocLazyLoad.load(setAssets);
                            }
                        };
                        obj.push(routing);
                    }
                }
            }
            return obj;
        },
        loadAssetsDefault : function(assetsBefore){
            var allAssetsDefault = [];
            for(assetsKey in assetsBefore){
                allAssetsDefault.push('app/plugins/' + assetsKey + assetsBefore[assetsKey]);
            }
            return allAssetsDefault;
        },
        addRef : function(refPlugins) {
            for(ref in refPlugins){
                os._plugins.push(refPlugins[ref]);
            }
        }
    };
    return $plugins;

});