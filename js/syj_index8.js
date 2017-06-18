/**
 * Created by Administrator on 2017/6/4.
 */
$(function () {
    var myTimer = null;
    /*定义一个定时器*/
    var index = 0;
    //鼠标移入轮播图事件
    $('.syj_slider').hover(function () {
        clearInterval(myTimer);
        $('.syj_arrow,.syj_circle').animate({
            opacity: 1
        }, 300);
    }, function () {
        myTimer = setInterval(autoPlay, 2000);
        $('.syj_arrow,.syj_circle').animate({
            opacity: 0
        }, 300);
    });

    //左点击轮播
    $('.syj_arrow_r').on('click', function () {
        autoPlay();
    });

    //呼吸函数
    function breath(index) {
        $(".syj_img_ul li").eq(index).siblings().stop().animate({"opacity": 0}, 2000);
        $(".syj_img_ul li").eq(index).stop().animate({"opacity": 1}, 2000);
    }

    //向右轮播
    $('.syj_arrow_l').on('click', function () {

        if (index > 0) {
            index--;
        } else {
            index = $('.syj_img_ul li').length - 1;
        }
        breath(index);

        //小圆点同步链接
        $('.syj_circle li').eq(index).addClass('syj_current').siblings().removeClass();

    });
    //自动轮播
    function autoPlay() {
        if (index < $('.syj_img_ul li').length - 1) {
            index++;
        } else {
            index = 0;
        }
        breath(index);
        //小圆点同步链接
        $('.syj_circle li').eq(index).addClass('syj_current').siblings().removeClass();
    }

//开启自动轮播
    myTimer = setInterval(autoPlay, 2000);

    //小圆点鼠标移入移出事件
    $('.syj_circle ul li').on('mouseenter', function () {
        var num = $(this).index();
        $(this).addClass('syj_current').siblings().removeClass();
        breath(num);
    });


    var height = document.body.scrollHeight;
    console.log(height);
    //左边侧边栏
    $(window).scroll(function(){

       var DistanceTop =  $(window).scrollTop();
        //console.log(DistanceTop);
        if(DistanceTop> 600 ){
            $('.syj_subNav').stop().animate({"opacity": 1}, 500);
            //故宫出品淡入淡出
            $('.wm').stop().slideDown(500);
            $('.wm1').stop().slideDown(500);
        }else{
            $('.syj_subNav').stop().animate({"opacity": 0}, 500);
            //故宫出品淡入淡出
            $('.wm').stop().slideUp(500);
            $('.wm1').stop().slideUp(500);
        };

        //左侧边栏点击事件
        $(".syj_subNav ul li").on("click",function(){
            var index = $(this).index();
            //console.log(index);
            if(index == 0 ){
                $(window).scrollTop(940);

            }else if(index == 1){
                $(window).scrollTop(1500);
            }else if(index == 2){
                $(window).scrollTop(2150);
            }else if(index == 3){
                $(window).scrollTop(3170);
            }else if(index == 4){
                $(window).scrollTop(4250);
            }else if(index == 5){
                $(window).scrollTop(5250);
            }else if(index == 6){
                $(window).scrollTop(6300);
            } else if(index == 7){
                $(window).scrollTop(7350);
            } else if(index == 8){
                $(window).scrollTop(8360);
            }
        });
    });


    //商品轮播

    $('.wm_run_main').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(play ,2000);
    });
    console.log($('.wm_run_main ul li'));
    var timer = setInterval(play ,2000);
    var count = 0;
    function play(){
        if(count == 0){
            $('.wm_run_main ul').animate({
                left:-990+'px'
            },300);
        }else if(count == 1){
            $('.wm_run_main ul').animate({
                left:-1980+'px'
            },300);
        }
        count++;
        if(count > 1 ){
            count = 0 ;
            $('.wm_run_main ul').animate({
                left:0+'px'
            },1);
        }
    }



});