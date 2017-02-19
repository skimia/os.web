os.module('os.dashboard').controller('dashboard_ctrl',function(){
    $('#dashboardSlider').owlCarousel({
        items : 4,
        margin:20,
        nav:true,
        dotsEach: true,
        navText :['<i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>','<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>']
    });
});