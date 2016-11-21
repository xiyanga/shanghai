﻿var dataForWeixin = {
    appId: "",
    MsgImg: "icon.png",
    TLImg: "icon.png",
    url: "XXX",
    title: "title",
    desc: "XXX",
    fakeid: "",
    callback: function () {}
};

(function () {
    var onBridgeReady = function () {
 
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": dataForWeixin.appId,
                "img_url": dataForWeixin.MsgImg,
                "img_width": "640",
                "img_height": "640",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title 
            }, function (res) {
				//wxErrMsg(res);
                (dataForWeixin.callback)(); 
            });
        });
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            (dataForWeixin.callback)();
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": dataForWeixin.TLImg,
                "img_width": "640",
                "img_height": "640",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title 
            }, function (res) {
				//wxErrMsg(res); 
            });
        });
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": dataForWeixin.title ,
                "url": dataForWeixin.url
            }, function (res) {
				//wxErrMsg(res);
				(dataForWeixin.callback)(); 
			});
        });
        WeixinJSBridge.on('menu:share:facebook', function (argv) {
            (dataForWeixin.callback)();
            WeixinJSBridge.invoke('shareFB', {
                "img_url": dataForWeixin.TLImg,
                "img_width": "120",
                "img_height": "120",
                "link": dataForWeixin.url,
                "desc": dataForWeixin.desc,
                "title": dataForWeixin.title 
            }, function (res) {
				//wxErrMsg(res);
			});
        });

        
    };
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
})();