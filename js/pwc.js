/**
 * Created by wenchao on 2017/6/5.
 */
//-----------------------------------------�ҵ��Ա�������� �Ƴ��¼�
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

    //-----------------------------------------�ղؼ�������� �Ƴ��¼�
    $("#frulFour").on("mouseenter",function(){
        $("#eq01").show();
        $("#eq01").css({
            "z-index":99,
        })
    })
    $("#frulFour").on("mouseleave",function(){
        $("#eq01").hide();
    })
    //-----------------------------------------�̼�֧��������� �Ƴ��¼�
    $("#frulLast").on("mouseenter",function(){
        $("#last01").show();
        $("#last01").css({
            "z-index":99,
        })
    })
    $("#frulLast").on("mouseleave",function(){
        $("#last01").hide();
    })
    //-----------------------------------------��վ����������� �Ƴ��¼�
    $("#lieB").on("mouseenter",function(){
        $("#bigYcang").show();
        $("#bigYcang").css({
            "z-index":99,
        })
    })
    $("#lieB").on("mouseleave",function(){
        $("#bigYcang").hide();
    })
    //-----------------------------------------�ֻ�������� �Ƴ��¼�
    $("#frulFive").on("mouseenter",function(){
        $("#frulFiveimg>img").show().css("zIndex",1000);;
    })
    $("#frulFive").on("mouseleave",function(){
        $("#frulFiveimg>img").hide();
    })
    //------------------------------�����ֻ���ά������ �Ƴ��¼�
    $("#pwcSj").on("mouseenter",function(){
        $("#pwcSjimg").show().css("zIndex",1000);;
    })
    $("#pwcSj").on("mouseleave",function(){
        $("#pwcSjimg").hide();
    })
    //-------------------------------������������ �Ƴ��¼�
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

