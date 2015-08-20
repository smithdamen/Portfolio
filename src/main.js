$(document).ready(function(){
//Waypoints
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
//Scrollto    
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        // console.log(this.hash);
        $(window).stop(true).scrollTo(this.hash, {duration:750, interrupt:true, easing:'easeInBack'});
    });
//Stellar
    $('.full-height').stellar();
//MixItUp
    $(function(){
        $('#mix-container').mixItUp();
    });
//Lettering
    $(".fancy_title").lettering();
//FitText
    $("#responsive_headline").fitText();
//Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.column-sizer'
    });
//ScrollSpy
    $('body').scrollspy({ target: '#navbar', offset: -75 });
});
