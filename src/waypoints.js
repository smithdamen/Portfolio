//This script is for custom animations on title sections


// $(document).ready(function(){
//     var animationName="animated fadeInUp";
    
//     $(".title-section").addClass("fade")
    
//     $(".title-section").waypoint(function(){
//         $(".title-section").addClass(animationName);
//     }, { offset: '30%' });
// });

$(document).ready(function(){
    var animationName="animated fadeInUp";
    
    $('#main-title').waypoint(function() {
        $('#main-title').addClass(animationName);
    });
    $('#about-title').waypoint(function() {
        $('#about-title').addClass(animationName);
    } , { offset : '30%' });
    $('#portfolio-title').waypoint(function() {
        $('#portfolio-title').addClass(animationName);
    } , { offset : '30%' });
    $('#blog-title').waypoint(function() {
        $('#blog-title').addClass(animationName);
    } , { offset : '30%' });
    $('#contact-title').waypoint(function() {
        $('#contact-title').addClass(animationName);
    } , { offset : '30%' });
});


//This script is from http://jsfiddle.net/harconst/4FNFW/

/*
$(function(){
    function onScrollInit( items, trigger ) {
        items.each( function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-animation'),
                osAnimationDelay = osElement.attr('data-animation-delay');
      
                osElement.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '70%'
        });
  });
}

 onScrollInit( $('.title-section') );
});
*/