os.core.factory('$plugins',function($http){
    var $plugins = {
        get : function(link){
            var promise = $http.get(link).then(function(source){
                return source.data;
            });
            return promise;
        },
    };
    return $plugins;
});