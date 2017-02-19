
os.logs.log('AppDependencies','Defaults app dependencies',os.config.depsApp);
for(subApp in os.config.subApps){
    var subAppName = os.config.nameApp + '.'+ os.config.subApps[subApp];
    os.config.depsApp.push(subAppName);
    os.logs.log('AppDependencies','Add dynamic dependency',subAppName);
}

os.app = angular.module(os.config.nameApp,os.config.depsApp);

for(subApp in os.config.subApps){
    var subAppName = os.config.nameApp + '.'+ os.config.subApps[subApp];
    if(!os[os.config.subApps[subApp]]){
        os[os.config.subApps[subApp]] =  angular.module(subAppName,[]);
    }else{
        objErr = {
            root : os,
            system : os[os.config.subApps[subApp]]
        };
        os.logs.error('AppDependencies',os.config.subApps[subApp] + ' is invalid name for subApp, is reserved for system',objErr);
        break;
    }
}





