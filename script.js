var lastScrolled = [];
var lastAnimated = [];
$(".mainParent").scroll(function () {
    $(".skillSticky").each(function (index, item) {
        //if(Math.abs(lastScrolled[index] - $(".skillSticky").eq(index).offset().top)<4){
        if (lastScrolled[index] == $(".skillSticky").eq(index).offset().top) {
            if (!lastAnimated[index]) {
                $(".colTitle").eq($(this).attr("data-col")).addClass("animateShadowBottom")
                    .on("animationend", function () {
                        $(this).removeClass('animateShadowBottom');
                    });
                $(".skillSticky").eq(index)
                    .addClass('animateBounce')
                    .on("animationend", function () {
                        $(this).removeClass('animateBounce');
                    });
                lastAnimated[index] = 1;
            }
        } else {
            lastScrolled[index] = $(".skillSticky").eq(index).offset().top;
            lastAnimated[index] = 0;
        }
    });
    console.log(lastScrolled);
});