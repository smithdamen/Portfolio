//This script is for custom animations on title sections


$(document).ready(function(){
    var animationName="animated fadeInUp";
    
    $(".title-section").addClass("fade")
    
    $(".title-section").waypoint(function(){
        $(".toAnimate").addClass(animationName);
    }, { offset: '30%' });
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