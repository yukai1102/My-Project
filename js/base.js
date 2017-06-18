/**
 * Created by Administrator on 2017/6/4.
 */
$(function(){
    //顶部搜索栏------
    var arr = ["故宫","故宫一日游","北京故宫","故宫长城三日游","故宫工艺品","故宫德化窑白瓷","故宫自在观音像","故宫水晶镇尺"];
        //按键弹起执行筛选程序
        $("#yk-searchbox").on("keyup focus",function(){

            //如果输入框是空，那么下拉列表也为空，并终止程序
            if($(this).val() ==""){
                $("#yk-keywords").html("");
                return;
            }
            $("#yk-keywords").css({
                display:"block"
            })
            //先清空列表
            $("#yk-keywords").html("");
            //循环遍历，检索是否有相同的字符
            for(var i = 0; i < arr.length; i++){
                if(arr[i].indexOf(this.value) != -1){
                    $("<li>"+arr[i]+"</li>").appendTo($("#yk-keywords"));
                }
                //鼠标移入变色
                $("#yk-keywords>li").on("mouseenter",function(){
                    $(this).css({
                        backgroundColor:"#cd0036"
                    })
                })
                //鼠标离开恢复颜色
                $("#yk-keywords>li").on("mouseleave",function(){
                    $(this).css({
                        backgroundColor:"#fff"
                    })
                })
                //下拉列表点击时将值传入搜索框,并使得列表隐藏
                $("#yk-keywords>li").on("click",function(){
                    $("#yk-searchbox").val($(this).text());
                    $("#yk-keywords").css({
                        display:"none"
                    })
                })
                //阻止点击搜索框时的冒泡,使得点击除搜索框以外的页面部分能隐藏列表项
                $("#yk-searchbox").on("click",function(e){
                    e.stopPropagation();
                })
                $(document).on("click",function(){
                    $("#yk-keywords").css({
                        display:"none"
                    })
                })
            }
        })
})
//导航栏的下拉菜单
$(function(){
    $("#yk-allGoods,.yk-hide").on("mouseenter",function(){
        $(".yk-hide").css("display","block");
    }).on("mouseleave",function(){
        $(".yk-hide").css("display","none");
    })

})
