/*os.httpCallback.request.push(function(){
    // check token
});*/

os.module('os.login').config(function(){
    if(window.localStorage.osToken){
        // check if token is valid (token,timeStamp)
        os.state.go('os.dashboard');
    }else{

        os.state.go('login');
    }
});