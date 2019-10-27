var htmlUrl = "../";
var historyStep=1;
$(function(){
	setTimeout(function(){
		menuDown(1500);
	},500);
	var winH = $(window).height();
	var winW = $(window).width();
	var scale1=winH/804;
	var scale2=winH/769;
	$(".rotate").css({"transform":"scale("+scale1+")","top":(scale1*590-590)/2+150*scale1});
	$(".illustration").css({bottom:scale2*132});
	$(".main").show();
	$(".outContainer,.outWrapper,.about-container,.Enterprise-container,.Enterprise-wrapper,.personal-container").height(winH).width(winW);
	$(".popPage iframe").height(winH-80);
	if(winH<700){
		$("body").addClass('miniScreen');
		$(".frameBody").addClass('formini');
		$(".frameMain").addClass('formini');
	}else{
		$("body").removeClass('miniScreen');
		$(".frameBody").removeClass('formini');
		$(".frameMain").removeClass('formini');
	}
	
	$(".navi>li").hover(function(){
		if(!$(this).hasClass("active")){
			$(".navi>li.active").addClass("h");
		}
	},function(){
		$(".navi>li.active").removeClass("h");
	})
	$(window).resize(function(){
		winH = $(window).height();
	 	winW = $(window).width();
		$(".outContainer,.outWrapper,.about-container,.Enterprise-container,.Enterprise-wrapper,.personal-container").height(winH).width(winW);
		$(".popPage iframe").height(winH-80);
		if(winH<700){
			$("body").addClass('miniScreen');
			$(".frameBody").addClass('formini');
			$(".frameMain").addClass('formini');
		}else{
			$("body").removeClass('miniScreen');
			$(".frameBody").removeClass('formini');
			$(".frameMain").removeClass('formini');
		}
		scale1=winH/804;
		var scale2=winH/769;
		$(".rotate").css({"transform":"scale("+scale1+")","top":(scale1*590-590)/2+150*scale1});
		$(".illustration").css({bottom:scale2*132});
	});
	
	$(".popPage .back").click(function(){
		$("#mask").fadeOut(800);
		var p=$(this).parents(".popPage");
		p.animate({"right":-1000},800,function(){
			p.hide();
		});
	})
	$("#mask").click(function(){
		$("#mask").fadeOut(800);
		$(".popPage").animate({"right":-1000},800,function(){
			$(".popPage").hide();
		});
	})
	$(".popPage .hasUrl").click(function(){
		historyStep++;
	})
	$(".returnBtn").click(function(e){
		e.preventDefault();
		//alert(window.history);
		window.history.go(-historyStep);
	})

	$(".navigation span").hover(function() {
		var index=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".swiper-box .swiper-container").eq(index).show().siblings().hide();
	});
	$(".page2_1").hover(function() {
		$(this).animate({top:"-25px"}, 200);
	},function () {
		$(this).animate({top:"0"}, 200);
	});
	$(".page2_2").hover(function() {
		$(this).animate({top:"-25px"}, 200);
	},function () {
		$(this).animate({top:"0"}, 200);
	});
	$(".page2_3").hover(function() {
		$(this).animate({top:"-25px"}, 200);
	},function () {
		$(this).animate({top:"0"}, 200);
	});
})
//按钮上移
function menuUp(t){
	var tt= t?t:600;
	$("#header").stop().animate({top:-200,opacity:1},tt);
}
//按钮下来
function menuDown(t){
	var tt= t?t:1500;
	$("#header").stop().animate({top:0,opacity:1},tt);
}

//获取URL参数
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) {return unescape(r[2]);}else{ return 0}; 
}
/*
//设置URL参数
function setUrlParam(para_name, para_value) {
	var strNewUrl = new String();
	var strUrl = new String();
	var url = new String();
	url= window.location.href;
	strUrl = window.location.href;
	var json={time:new Date().getTime()};
	if (strUrl.indexOf("?") != -1) {
		strUrl = strUrl.substr(strUrl.indexOf("?") + 1);
		if (strUrl.toLowerCase().indexOf(para_name.toLowerCase()) == -1) {
			strNewUrl = url + "&" + para_name + "=" + para_value;
			//window.location = strNewUrl;
			window.history.pushState(json,"",strNewUrl);
		} else {
			var aParam = strUrl.split("&");
			for (var i = 0; i < aParam.length; i++) {
				if (aParam[i].substr(0, aParam[i].indexOf("=")).toLowerCase() == para_name.toLowerCase()) {
					aParam[i] = aParam[i].substr(0, aParam[i].indexOf("=")) + "=" + para_value;
				}
			}
			strNewUrl = url.substr(0, url.indexOf("?") + 1) + aParam.join("&");
			//window.location = strNewUrl;
			window.history.pushState(json,"",strNewUrl);
		}

	} else {
		strUrl += "?" + para_name + "=" + para_value;
		//window.location=strUrl;
		window.history.pushState(json,"",strUrl);
	}
}
//删除URL参数
function delQueStr(ref){
    var str = "";
	var url= window.location.href;
	var json={time:new Date().getTime()};
    if (url.indexOf('?') != -1){
        str = url.substr(url.indexOf('?') + 1);
	}else{
        return url;
	}
    var arr = "";
    var returnurl = "";
    var setparam = "";
	var strNewUrl="";
    if (str.indexOf('&') != -1) {
        arr = str.split('&');
        for (i in arr) {
            if (arr[i].split('=')[0] != ref) {
                returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
            }
        }
        strNewUrl = url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
		window.history.pushState(json,"",strNewUrl);
    }else {
        arr = str.split('=');
        if (arr[0] == ref){
            //return url.substr(0, url.indexOf('?'));
			strNewUrl=url.substr(0, url.indexOf('?'));
			window.history.pushState(json,"",strNewUrl);
		}else{
            //return url;
			strNewUrl =url;
			window.history.pushState(json,"",strNewUrl);
		}
    }
}
*/
