os.module('os.core.mainbar').directive('mainBar',function() {
    return {
        restrict : "E",
        templateUrl : "app/plugins/os-core/views/components/mainBar.html",
        controller: function ($rootScope){
            os.rootScope.$emit('osCoreIsLoaded');
            console.log('<i class="fa fa-bullseye" aria-hidden="true"></i>','<div class="userName">Bonjour <span>Root</span></div>');
            os.rootScope.buttonHome = '';
            os.rootScope.taskBar = [];
            os.rootScope.fastAction = '';
            os.rootScope.$emit('osCoreIsLoaded');
        }

    };
});
