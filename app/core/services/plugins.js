
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
        getRoutOtherwise : function (){
            return $http.get('mock/routingOtherwise.json').then(function(source){
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
            $.each(router,function(currRoutKey,currRout){
                $.each(currRout,function(routeKey,route){
                    var setAssets = [];
                    $.each(route.assets,function(assetsKey,assets){
                        setAssets.push('app/plugins/'+ routeKey + assets);
                    });
                    $.each(route.views,function(viewsKey,views){
                        views.templateUrl = 'app/plugins/'+ routeKey + views.templateUrl;
                    });
                    route.resolve = {
                        loadMyScript: function($ocLazyLoad) {
                            return $ocLazyLoad.load(setAssets);
                        }
                    };
                    obj.push(route);
                });
            });
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