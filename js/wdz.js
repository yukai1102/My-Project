/**
 * Created by Administrator on 2017/6/3.
 */
//右边黑色状态栏
$(window).on("load",function () {
    // 右边状态栏开机划入界面
    $(".statu_bar").css({width:0}).fadeIn().animate({width:35},1000);
    // var wdztimer=setTimeout($(".statu_bar").slideUp(1000,function () {
    //     clearInterval(wdztimer);
    // }),3000)
    //右边的li标签移入事件
    $(".statu_bar").on("mouseleave",function () {
        if(!wdzflag){
            $(".statu_bar").stop().animate({width:0},1000);
            $(".userlogin").stop().hide();
            wdzflag=!wdzflag;
        }

    })
    $(".statu_bar li").on("mouseenter",function () {
        $(this).css({backgroundColor:"#FF3C1F"});
        $(this).find(".explain").stop().show().animate({
            left:-100
        },200);

    }).on("mouseleave",function () {
        $(this).css({backgroundColor:""});
        $(this).find(".explain").stop().css({
            left:-150,
            display:"none"
        });
    }).on("click",function () {
            $(this).mousemove();
            switch($(this).index()){
                case 0:$(".userlogin").css({top:0}).find("em")
                    .css({top:188});break;
                case 1:$(".userlogin").css({top:79}).find("em")
                    .css({top:188});break;
                case 2:$(".userlogin").css({top:157}).find("em")
                    .css({top:188});break;
                case 3:$(".userlogin").css({top:192}).find("em")
                    .css({top:188});break;
                case 4:$(".userlogin").css({top:192}).find("em")
                    .css({top:225});break;
                case 5:$(".userlogin").css({top:192}).find("em")
                    .css({top:264});break;
            }
        $(".form1").stop().fadeIn(100);
        });

//最下边两个按钮
    $(".toTopli").on("click",function () {
        $("window").scrollTop(0);
        $(this).hide();
    }).hover(function () {
        $(this).css({backgroundColor:"#FF3C1F"});
    },function () {
        $(this).css({backgroundColor:""});
    });
    //二维码的移入移出效果
    $(".ewmli ").hover(
        function () {
            $(".erweimadiv").stop().fadeIn();
            $(this).css({backgroundColor:"#FF3C1F"});
        },function () {
            $(".erweimadiv").stop().fadeOut();
            $(this).css({backgroundColor:""});
        }
    );
    // 登陆界面第一张的角落二维码按钮
    $(".form1 .passlogin").on("click",function () {
        $(".form1").stop().hide(300);
        $(".form2").stop().show(300);
        $(".form2 .write").stop().slideDown(300);
    });
    // 登陆界面第二张的角落二维码按钮
    $(".form2 .passlogin").on("click",function () {
        $(".form2").stop().hide(300);
        $(".form1").stop().show(300);
    });
    $(".userlogin .close-login").on("click",function () {
        $(".userlogin").stop().hide();
    });
    //左边的轮播
    $(".statu-left li").on("click",function () {
        $(this).addClass("currentt").siblings().removeClass("currentt");
       $(window).scrollTop($(this).index() * $("body").height() / 5);

    })
        //滚动条滚动
    $(window).scroll(function () {
        if($(window).scrollTop()>0){
            $(".toTopli").show();
        }else{
            $(".toTopli").hide();
        }
    })
    //全局鼠标鼠标移动
    var wdzscrollx=0;
    var wdzflag=false;
    $(window).on("mousemove",function (e) {
        if(e.clientX>=$(window).width()-20){
            if(wdzflag){
                $(".statu_bar").stop().animate({width:35},500,function () {
                    wdzflag=!wdzflag;
                });

            }

        }
        // if(Math.abs(e.pageY-wdzscrollx)>($("body").height()-$(window).height())/5){
        //   $(".statu-left").fadeIn();
        //     wdzscrollx=e.pageY;
        // }
        // console.log(e.pageY-wdzscrollx);
        // console.log(($("body").height()-$(window).height())/5));
    });

});
