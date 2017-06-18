/**
 * Created by dke on 2017/6/4.
 */
$(function () {
    //购买数量变化设置
    //增加购买数量
    var num = parseInt($('#yq-number').val());
    $('.yq-inc').on('click', function () {
        num++;
        $('#yq-number').val(num);
    });
    //减少购买数量
    $('.yq-dec').on('click', function () {
        num--;
        $('#yq-number').val(num);
        if (num <= 1) {
            num = 1;
            $('#yq-number').val(num);
        }
    });
    //购买数量变化设置
    //图片放大镜
    var picLis = $('.yq-details-smallPic').find('li');
    picLis.each(function (index, ele) {
        $(ele).attr('index', index + 1)
    });
    //鼠标移入最小的图片，更改对应的展示图片与放大镜图片
    picLis.on('mouseenter', function () {
        var index = $(this).attr('index');
        $('.yq-details-bigPic img').attr('src', '../images/bigpic' + index + '.jpg');
        $('.yq-details-pic img').attr('src', '../images/bigpic' + index + '.jpg');
    });
    //放大镜
    var box = $('.yq-details-bigPic')
    box.mousemove(function (e) {
        var boxLeft = box.offset().left;
        var boxTop = box.offset().top;
        $('#mask').show()
        $('.yq-details-pic').show().css({
            'zIndex': 99
        });
        var maskX = e.pageX - boxLeft - $('#mask').width() / 2;
        var maskY = e.pageY - boxTop - $('#mask').height() / 2;
        maskX = maskX < 0 ? 0 : maskX;
        maskY = maskY < 0 ? 0 : maskY;
        maskX = maskX > $('#mask').width() ? $('#mask').width() : maskX;
        maskY = maskY > $('#mask').height() ? $('#mask').height() : maskY;
        $('#mask').css({
            'left': maskX,
            'top': maskY
        });
        var bigpicX = -$(".yq-details-pic").width() / $('#mask').width() * maskX;
        var bigpicY = -$(".yq-details-pic").height() / $('#mask').height() * maskY;
        $(".yq-details-pic img").css({
            left: bigpicX,
            top: bigpicY
        })
    });
    box.mouseleave(function () {
        $('#mask').hide()
        $('.yq-details-pic').hide()
    });
    //刮券
    $('.yq-offGet').on('click', function () {
        $('.yq-lottery').show();
    });
    $('.yq-lottery span').on('click', function () {
        $('.yq-lottery').hide();
    });
    //支付方式
    $('.yq-service p span:last').on("click", function () {
        $('.yq-payWay').show();
    });
    $('.yq-payClose').on("click", function () {
        $('.yq-payWay').hide();
    });
    //优惠信息
    $('.yq-active span:last').on('click', function () {
        $('.yq-offActive').show();
    });
    $('.yq-offActive .yq-offClose').on('click', function () {
        $('.yq-offActive').hide();
    });
    //右侧轮播图
    var liHeight = $('#yq-lunBoPic').find('li').height();
    var count = 0;
    $("#yq-slideTop").click(function () {
        if (count == 3) {
            count = 0;
            $('#yq-lunBoPic').css({
                top: 0,
            });
        }
        count++;
        $('#yq-lunBoPic').animate({
            top: -liHeight * count,
        }, 500);
    });
    $("#yq-slideBottom").click(function () {
        if (count == 0) {
            count = 3;
            $('#yq-lunBoPic').css({
                top: -liHeight * 3,
            });
        }
        count--;
        $('#yq-lunBoPic').animate({
            top: -liHeight * count,
        }, 500);
    });
    //二维码部分
    $("#yq-changeBuy").hover(function () {
        $('.yq-bigEWM').slideDown(100);
        $("#yq-changeBuy span").html("手机购买△").css({
            "color":"#fff"
        });
        $("#yq-changeBuy").css({
            'backgroundColor':"#ccc"
        })
    }, function () {
        $("#yq-changeBuy").css({
            'backgroundColor':"#fff"
        })
        $("#yq-changeBuy span").html("手机购买▽").css({
            "color":"#a4b1d8"
        });
        $('.yq-bigEWM').slideToggle(100);
    });
    $(window).on('scroll', function () {
        var distance = $(".yq-shopComment").offset().top;
        var wh = $(window).scrollTop();
       if(wh>distance){
           $('.yq-right').show(100);
           $('.yq-left').show(100);
           $('.yq-shopCommentTop ul').css({
                   'position':'fixed',
                   'top':0,
                   'left':319,
                   'zIndex':999
               }
           );
           $('.yq-left').css({
               'position':'fixed',
               'top':0,
               'left':0,
               'zIndex':999
           });
           $('.yq-right').css({
               'position':'fixed',
               'top':0,
               'left':1077,
               'zIndex':999
           })
       }else{
           $('.yq-right').hide(100);
           $('.yq-left').hide(100);
           $('.yq-shopCommentTop ul').css({
                   'position':'absolute',
                   'left':0,
                   'zIndex':999
               }
           );
       }
    });
    $("#yq-goodD").mouseenter(function () {
        $(".yq-bottomContent img").attr("src","../images/yq-details.png").css({
            width:1040
        });
        $(".yq-bottomContent").css({
            width:1040
        })
    })

    $('#yq-goodC').mouseenter(function () {
        $(".yq-bottomContent").css({
            width:1180
        })
        $(".yq-bottomContent img").attr("src","../images/yq-comments.png").css({
                width:1180
        }
        );
    })
});