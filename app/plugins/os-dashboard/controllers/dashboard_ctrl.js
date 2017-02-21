os.module('os.dashboard').controller('dashboard_ctrl',function($scope){
    os.rootScope.headTitle = 'Dashboard';
    $('#dashboardSlider').owlCarousel({
        items : 4,
        margin:20,
        nav:true,
        dotsEach: true,
        navText :['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>'],
        responsive : {
            0 : {
                items : 1
            },

            980 : {
                items : 2
            },

            1024 : {
                items :4
            }
        }
    });
    $scope.tils = {
        0 :{
            name:'Til',
            groupeName : 'panel_1',
            type :'large',
            icon : 'fa fa-bullseye',
            color : 'orange',
            action: function(){
                alert('onclic on til launch app default');
            }
        }
    }
});