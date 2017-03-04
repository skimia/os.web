os.core.factory('$graphQL',function($http){
    var $graphQL = {   
        send : function(query,variables){
            var graphQuery = {
                query: query,
                variables : JSON.stringify(variables)
            };
            debugger;
            var promise = $http.post(os.link.api,graphQuery).then(function(source){
                return source.data.data;
            });
            return promise;
        }
    };
    return $graphQL;
});
