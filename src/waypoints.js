//This script is for custom animations on title sections

$(document).ready(function(){
    var animationName="animated fadeInUp";
    
    $('#main-title').waypoint(function() {
        $('#main-title').addClass(animationName);
    });
    $('#about-title').waypoint(function() {
        $('#about-title').addClass(animationName);
    } , { offset : '70%' });
    $('#portfolio-title').waypoint(function() {
        $('#portfolio-title').addClass(animationName);
    } , { offset : '70%' });
    $('#blog-title').waypoint(function() {
        $('#blog-title').addClass(animationName);
    } , { offset : '70%' });
    $('#contact-title').waypoint(function() {
        $('#contact-title').addClass(animationName);
    } , { offset : '70%' });
});
