os.config.depApp = [
            'ngResource',
            'ui.router',
            'oc.lazyLoad',
            'os.core',
            'os.plugins'
          ];

os.config.html5Mode = {
            enabled: true,
            requireBase: true
          };

os.config.link.default = 'app' ;
os.config.link.core.default = os.config.link.default + '/core';
os.config.link.core.views.default = os.config.link.core.default + '/views';
