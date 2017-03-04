os.config.nameApp = 'os';
os.config.subApps = [
    'core',
    'plugins'
];
os.config.depsApp = [
    'ngResource',
    'ui.router',
    'oc.lazyLoad',
    'ngSanitize',
    'angular-bind-html-compile'

];
os.config.html5Mode = {
    enabled: true,
    requireBase: true
};
os.link.default = 'app' ;
os.link.core.default = os.link.default + '/core';
os.link.core.views.default = os.link.core.default + '/views';
os.link.plugins.default = os.link.default + '/plugins';
os.link.api = '/api/graph.ql';