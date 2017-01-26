os.core.factory('$plugins',function($http){
    var $plugins = {
        get : function(link){
            var promise = $http.get(link).then(function(source){
                return source.data;
            });
            return promise;
        },
        nb : function(type){
            var promise = $plugins.get('app/plugins/plugins.json').then(function(data){
                var nb = 0;

                $.each(data,function(key,value){
                    if(value.type == type){
                        nb++;
                    }
                });
                return nb;
            });
            return promise;

        },
        load : function(name){

        }
    };
    return $plugins;
});