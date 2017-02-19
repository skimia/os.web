var os = { // _[name] is private variable
    app:{},
    config : {
        nameApp: '',
        subApps: [],
        depsApp : []
    },
    event :{
        send : function(){},
        listen: function(){}
    },
    logs : {
        error : function (){},
        warn : function (){},
        info :function (){},
        log : function (){},
        verbose: function() {},
        replayLog : function() {},
        _data :{},
        _templateData : {
                verbose : false,
                error : [],
                warn : [],
                info :[],
                log : []
        }
    },
    link : {
        default : '',
        core :{
            default : '',
            views :{
                default : '',
                links : []
            }
        },
        plugins : {
            default : '',
            links : []
        }
    },
    _plugins : []
};


/*var os = {};
    os.event = {};
    os.config = {,;
    os.config.link = {
        default : '',
        core :{
            default : '',
            views :{
                default : '',
                links : []
            }
        },
        plugins : {
            default : '',
            links : []
        }

    };
    os.pluginsCore = [];
    os.pluginsSyst = [];
    os.pluginsExt = [];
    os.httpCallback =  {
    request: [],
    requestError: [],
    response: [],
    responseError: []
};*/