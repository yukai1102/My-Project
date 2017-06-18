/**
 * Created by Administrator on 2017/6/4.
 */
$.fn.changeColor = function (color){
  // jQuery的插件都是依赖于jQuery文件的，因此使用的方法，仍然是jQuery的方法
  // 在插件当中，当前对象用this来表示，此时的this是当前的jQuery对象
  this.css({
    backgroundColor:color
  });
}