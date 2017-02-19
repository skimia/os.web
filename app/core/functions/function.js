os.logs.log = function (name,msg,obj){
    var log;
    if(!os.logs._data[name]){
        log = new Object(os.logs._templateData);
        os.logs._data[name] = log;
    }
    log = {
        msg :msg,
        obj : obj
    };
    os.logs._data[name].log.push(log);
    if(os.logs._data[name].verbose){
        console.log(name,msg,obj);
    }
};
os.logs.error = function (name,msg,obj){
    var error;
    if(!os.logs._data[name]){
        error = new Object(os.logs._templateData);
        os.logs._data[name] = error;
    }
    error = {
        msg :msg,
        obj : obj
    };
    os.logs._data[name].error.push(error);
    if(os.logs._data[name].verbose){
        console.error(name,msg,obj);
    }
};
os.logs.info = function (name,msg,obj){
    var info;
    if(!os.logs._data[name]){
        info = new Object(os.logs._templateData);
        os.logs._data[name] = info;
    }
    info = {
        msg :msg,
        obj : obj
    };
    os.logs._data[name].error.push(info);
    if(os.logs._data[name].verbose){
        console.info(name,msg,obj);
    }
};
os.logs.warn = function (name,msg,obj){
    var warn;
    if(!os.logs._data[name]){
        warn = new Object(os.logs._templateData);
        os.logs._data[name] = warn;
    }
    warn = {
        msg :msg,
        obj : obj
    };
    os.logs._data[name].error.push(warn);
    if(os.logs._data[name].verbose){
        console.warn(name,msg,obj);
    }
};
os.logs.verbose = function(name,verbosity){
    if(name == '' || name == undefined){
        for(log in os.logs._data){
            var elm = os.logs._data[log];
            elm.verbose = verbosity == undefined ?
                !elm.verbose : verbosity;
        }
        os.logs._templateData.verbose = verbosity == undefined ?
            !os.logs._templateData.verbose : verbosity;
    }else{
        if(!os.logs._data[name]){
            log = new Object(os.logs._templateData);
            os.logs._data[name] = log;
        }
        os.logs._data[name].verbose = verbosity == undefined ?
            !os.logs._data[name].verbose : verbosity;
    }
};
os.logs.replayLog = function (name,type) {
    if(name == '' || name == undefined){
        if(type == '' || type == undefined){
            for(logs in os.logs._data){
                for(log in  os.logs._data[logs].log){
                    console.log(os.logs._data[logs].log[log]);
                }
                for(error in  os.logs._data[logs].error){
                    console.error(os.logs._data[logs].error[error]);
                }
                for(info in  os.logs._data[logs].info){
                    console.info(os.logs._data[logs].info[info]);
                }
                for(warn in  os.logs._data[logs].warn){
                    console.warn(os.logs._data[logs].warn[warn]);
                }
            }
        }else{
            for(logs in os.logs._data){
                console.log(logs);
            }
        }
    }
};


os.module = function(name,dep){
    return angular.module('os.plugins',dep);
};

/*
os.event.emit = function (name,obj) {
     var injector = angular.injector(['ng']);
     function test($rootScope){
         os.routeScope = $rootScope;
         return $rootScope.$emit(name,obj);
     }
     injector.invoke(test);
    return test();
 };
*/



