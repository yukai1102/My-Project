/**
 * Created by Administrator on 2017/6/4.
 */
$.fn.accordion = function (){
  // 1. 获取对象
  // var box = $("#box");

  // var lis = $("#box li");
  var lis = this.find('li'); // 在插件当中,当前对象用this来指代  从当前对象去获得对应的子级元素
  var boxWid = this.width();  // 获取最外层盒子的宽度
  // 2. 给li标签设置宽度
  lis.css({
    width:  Math.ceil(boxWid/lis.length)
  });
  var liWidth = lis.width();//获取一个li标签的宽度
  //3. 给每一个li标签设置背景颜色
  lis.each(function (index,ele){
    // ele是DOM对象
    $(ele).css({
      backgroundColor: createColor()
    });
  });
  //4. 鼠标移入当前li标签的时候，要让当前的li标签扩大3倍,其它的li标签一部分剩下的宽度
  var liWidth1 = liWidth*3;
  console.log(liWidth1);
  lis.hover(function (){
    $(this).stop().animate({
      width:liWidth1
    },300).siblings().stop().animate({
      width: (boxWid-liWidth1)/(lis.length-1)
    },300);
  },function (){
    lis.stop().animate({
      width: liWidth
    },300);
  });

  /**
   * 定义了一个随机生成16进制颜色的函数
   * @returns {string}
   */
  function createColor(){
    var str = "#";
    var colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    for(var i=0;i<6;i++){
      var index =Math.floor(Math.random()*colors.length) ; // 0--1的小数0.999   0--15  15.9999
      str += colors[index];
    }
    return str;
  }

}