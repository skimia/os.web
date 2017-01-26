os.core.factory('myInterceptor',function() {

    var myInterceptor = {
        request: function(data){
            for(i in os.httpCallback.request){
                var callback = os.httpCallback.request[i];
                callback();
            }
            return data;
        },
        requestError:function(){

        },
        response:function(data){
            return data;
        },
        responseError:function(){

        }
    };

    return myInterceptor;
})
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('myInterceptor');

    }]);