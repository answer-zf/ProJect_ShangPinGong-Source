//首页 ==>产品部分轮播
window.onload=function() {
    jQuery(".picScroll-left").slide(
        {
            titCell:".hd ul",
            mainCell:".bd ul",
            autoPage:true,
            effect:"leftLoop",
            autoPlay:true,
            vis:2,
            trigger:"click"
        });

//手机端适应产品轮播

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
    });

}


$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
    s = $(window).scrollTop();
    if(s != 0){
        $('.navbar-itcast').addClass('nav_box');//滚动条样式
    }
    if (delta > 0) {
        // 向上滚
        $('.navbar-itcast').fadeIn(400);//导航条显示
        $('.navbar-itcast').addClass('nav_box');
        if(s == 0){
            $('.navbar-itcast').removeClass('nav_box');
        }

    } else if (delta < 0) {
        // 向下滚
        $('.navbar-itcast').fadeOut(700);//导航条隐藏
    }
})