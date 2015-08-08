//This script is for custom animations on title sections
$(document).ready(function(){
    $(".title-section").waypoint(function(){
        $(".title-section").addClass("animated fadeInUp");
    },{ 
        offset: '30%'
    });
});