$(document).ready(function() {

var lastScrolled = [];
var lastAnimated = [];
$(".mainParent").scroll(function () {
    $(".bounceSticky").each(function (index, item) {
        //if(Math.abs(lastScrolled[index] - $(".skillSticky").eq(index).offset().top)<4){
        if (lastScrolled[index] == $(".bounceSticky").eq(index).offset().top) {
            if (!lastAnimated[index]) {
                $(".colTitle").eq($(this).attr("data-col")).addClass("animateShadowBottom")
                    .on("animationend", function () {
                        $(this).removeClass('animateShadowBottom');
                    });
                $(".bounceSticky").eq(index)
                    .addClass('animateBounce')
                    .on("animationend", function () {
                        $(this).removeClass('animateBounce');
                    });
                lastAnimated[index] = 1;
            }
        } else {
            lastScrolled[index] = $(".bounceSticky").eq(index).offset().top;
            lastAnimated[index] = 0;
        }
    });
    //console.log(lastScrolled);
});


// Sync Scrolling

// for desktop
 $('.nav').bind('mousewheel DOMMouseScroll', function(e){
    console.log(e.originalEvent.wheelDeltaY);
    $(".mainParent").scrollTop($(".mainParent").scrollTop() - e.originalEvent.wheelDeltaY);
});

// for mobile
var lastY;
var currentY;
$(".nav").on('touchstart', function (e){
    var currentY = e.changedTouches[0].clientY;
    lastY = currentY;
});
$(".nav").on('touchmove', function (e){
    var currentY = e.changedTouches[0].clientY;
    delta = currentY - lastY;
    $(".mainParent").scrollTop($(".mainParent").scrollTop() + delta*-100);
    lastY = currentY;
});

$(".footer .filterSticky").on('click', function () {
    var easeHeight = $("body").height() - 300;
    $(".footer").height(easeHeight);
    $(this).toggleClass("filterSticky_active");
    var dataFilter = $(this).attr("data-filter");
    const easeOut = setTimeout(() => {
        $("."+dataFilter+"Content").each(function (index, item) {
            $(this).toggleClass("d-none");
        });
        $(".footer").height(60);
    }, 1001);
});

// scroll animations
ScrollReveal().reveal('.innerContent', { container: $(".mainParent"), delay: 300, origin: 'left', distance: '30px', easing: 'ease-in'});
ScrollReveal().reveal('.linkBadge', { container: $(".mainParent"), delay: 600, origin: 'top', distance: '30px', easing: 'ease-in', scale: 0.5});
ScrollReveal().reveal('.filterSticky', { container: $(".mainParent"), delay: 600, origin: 'right', distance: '30px', easing: 'ease-in', scale: 0.5});
ScrollReveal().reveal('.bounceSticky', { container: $(".mainParent"), delay: 900, origin: 'top', distance: '30px', easing: 'ease-in', scale: 0.5});
// TODO The first contents may come one by one => increasing delay param

$(".read-more:not(.expanded)").each(function(){
    $(this).append('<span class="trigger">+ read more</span>');

});
$(".read-more").click(function(){
    $(this).addClass("expanded");
});

$("a[href*=http]").attr("target","_blank");

});

