$(document).ready(function(){
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
    $('body').scrollspy({ target: '#navbar', offset: 75 });
});
