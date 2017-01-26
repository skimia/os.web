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
 os.test = function(name,func){
     //var injector = angular.injector(['ng']);
     console.log(formalParameterList(func));
    // injector.invoke(func);

 };

 var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
 var FN_ARG_SPLIT = /,/;
 var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
 var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

 function formalParameterList(fn) {
     var fnText,argDecl;
     var args=[];
     fnText = fn.toString().replace(STRIP_COMMENTS, '');
     argDecl = fnText.match(FN_ARGS);

     var r = argDecl[1].split(FN_ARG_SPLIT);
     for(var a in r){
         var arg = r[a];
         arg.replace(FN_ARG, function(all, underscore, name){
             args.push(name);
         });
     }
     return args;
 }



