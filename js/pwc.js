/**
 * Created by wenchao on 2017/6/5.
 */
//-----------------------------------------我的淘宝鼠标移入 移出事件
$(function(){
    $("#frulFirst").on("mouseenter",function(){
        $("#chilUl").show();
        $("#chilUl").css({
            "z-index":99,
        })
    })
    $("#frulFirst").on("mouseleave",function(){
        $("#chilUl").hide();
    })

    //-----------------------------------------收藏夹鼠标移入 移出事件
    $("#frulFour").on("mouseenter",function(){
        $("#eq01").show();
        $("#eq01").css({
            "z-index":99,
        })
    })
    $("#frulFour").on("mouseleave",function(){
        $("#eq01").hide();
    })
    //-----------------------------------------商家支持鼠标移入 移出事件
    $("#frulLast").on("mouseenter",function(){
        $("#last01").show();
        $("#last01").css({
            "z-index":99,
        })
    })
    $("#frulLast").on("mouseleave",function(){
        $("#last01").hide();
    })
    //-----------------------------------------网站导航鼠标移入 移出事件
    $("#lieB").on("mouseenter",function(){
        $("#bigYcang").show();
        $("#bigYcang").css({
            "z-index":99,
        })
    })
    $("#lieB").on("mouseleave",function(){
        $("#bigYcang").hide();
    })
    //-----------------------------------------手机鼠标移入 移出事件
    $("#frulFive").on("mouseenter",function(){
        $("#frulFiveimg>img").show().css("zIndex",1000);;
    })
    $("#frulFive").on("mouseleave",function(){
        $("#frulFiveimg>img").hide();
    })
    //------------------------------下面手机二维码移入 移出事件
    $("#pwcSj").on("mouseenter",function(){
        $("#pwcSjimg").show().css("zIndex",1000);;
    })
    $("#pwcSj").on("mouseleave",function(){
        $("#pwcSjimg").hide();
    })
    //-------------------------------店面评分移入 移出事件
    $("#pwcQjdone,#pwcPfen").on("mouseenter",function(){
        $("#pwcPfen").show().css("zIndex",1000);
    })
    $("#pwcQjdone,#pwcPfen").on("mouseleave",function(){
        $("#pwcPfen").hide();
    })
    $("#pwcfuWu,#pwcPfen").on("mouseenter",function(){
        $("#pwcPfen").show().css("zIndex",1000);
    })
    $("#pwcfuWu,#pwcPfen").on("mouseleave",function(){
        $("#pwcPfen").hide();
    })

})

