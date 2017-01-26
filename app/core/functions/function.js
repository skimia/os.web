 os.module = function(name,dep){
    return angular.module(name,dep);
 };
 os.event.emit = function (name,obj) {
     var injector = angular.injector(['ng']);
     function test($rootScope){
         os.routeScope = $rootScope;
         return $rootScope.$emit(name,obj);
     }
     injector.invoke(test);
    return test();
 };


