var os = {};
    os.event = {};
    os.config = {};
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
};