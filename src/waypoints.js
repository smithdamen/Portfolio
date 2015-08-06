//This script is for custom animations on title sections
var waypoint = $('title-section');

var animationName = 'animated fadeInUp';

waypoint.waypoint(function(){
    waypoint.addClass(animationName);
}, { offset: '30%' });