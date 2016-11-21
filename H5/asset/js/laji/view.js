$(function() {
    var msg_html = '';
    var msgapp = '<span class="foots"><span class="tg"><img src="http://img0.hx.com/magazine/img/last_ad_r1_c1.png" /></span>';
    msgapp += '<span class="foot_img"><a href="http://p.yiqifa.com/n?k=2mLErn27WE3SrI6H2mLErI6H6ERFWQLm6NRO1NMHWE27WlRsrI6HkQLErngyMEP9693mrZA7M9eKpQL-&spm=1.1.1.1&t=http://shop.paipai.com/1930980832?OrderStyle=21"><img src="http://img0.hx.com/magazine/img/last_ads_r5_c1.jpg" /></a></span>';
    msgapp += '<span class="foot_logo"><img class="l" src="http://img0.hx.com/magazine/img/last_ad_r5_c3.png" />';
    msgapp += '<a class="r" id="wx-link" href="http://mp.weixin.qq.com/s?__biz=MjM5MjQyODk5OA==&mid=200616630&idx=5&sn=f210df44503259ef54fb8f935758fe5a#rd&qq-pf-to=pcqq.c2c" ><img alt="美丽心情 — 小美苏木山" src="http://img0.hx.com/magazine/img/last_ad_r6_c6.png" usemap="#Map" /></a>';
    msgapp += '</span></span>';
    var urlstr = location.href;
    $.post("http://www.5.cn/Rmajax/viewsm", "url=" + urlstr, function(msg) {
        if (msg != "") {
            $(".ad_foot").empty();
            $("#wx-link").remove();
            msg = '<ul>' + msg + '</ul>';
            msg_html = msg_html + msg + msgapp + '</div>';
            $(".ad_foot").html(msg_html);

            $(".ad_foot h3 a").click(function() {
                var aOn = $(".ad_foot h3 a");
                $(this).addClass("active").siblings().removeClass("active");
                $(".list_boxs .ad_list").eq(aOn.index(this)).show().siblings().hide();
            });
        }
    });
//    $.post("http://www.5.cn/Rmajax/returnweixinurl","",function(msg){
//        if(msg!=""){
//            $("#wx-link").attr("href",msg);
//        }
//    });
})