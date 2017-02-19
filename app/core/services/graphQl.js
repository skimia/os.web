os.core.factory('$graphQL',function($http){
    var $graphQL = {   
        send : function(apiLink,query,variables){
            var graphQuery = {
                query: query,
                variables : variables
            };
            var promise = $http.post(apiLink,graphQuery).then(function(source){
                return source.data;
            });
            return promise;
        }
    };
    return $graphQL;
});
