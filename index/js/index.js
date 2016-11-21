/**
 * Created by Administrator on 2016/11/20.
 */
$(function(){
    (function(){
        var a = window.screen.height;
        var b= Number(a)*0.96;
        alert(a)
        $(".phone").css("height",a);
        $("#jiangshi").css("height",a);
        $("#onPhone").css("height",b);

    })()
    var EventUtil = {
        addHandler: function(element,type,handler) {
            if(element.addEventListener) {
                element.addEventListener(type,handler,false);
            }else if(element.attachEvent) {
                element.attachEvent("on"+type,handler);
            }else {
                element["on" +type] = handler;
            }
        },
        removeHandler: function(element,type,handler){
            if(element.removeEventListener) {
                element.removeEventListener(type,handler,false);
            }else if(element.detachEvent) {
                element.detachEvent("on"+type,handler);
            }else {
                element["on" +type] = null;
            }
        }
    };
    var touc = document.getElementById("phbtn");
    EventUtil.addHandler(window,"touchstart",function(e){

        EventUtil.addHandler(window,"touchmove",function(e){
            var touch = e.touches[0];
            //获取第一个触点
            var x = Number(touch.pageX)-50;
            //页面触点X坐标 var
            var  y = Number(touch.pageY)
            // 页面触点Y坐标  Number($(".phoneBtn").css("margin-left").replace(/[^0-9]/ig,"").substring(0,2))
            var a=$(".phoneBtn").width();
            if(x<a&&x>50){
                var g=x-50
               $("#phbtn").animate({left:g},0,function(){
                   if(x>a-20){
                       $(".p1").hide()
                       $("audio").attr("src","")
                       $(".p2").css("display","block")
                   }
               })
           }


        })
    })

// 连续滑动触发

//当手指从屏幕上离开时触发;
    EventUtil.addHandler(window,"touchend",function(event){
        //alert(event.pageX)
        //<$(".clock").clientLeft
    })




})