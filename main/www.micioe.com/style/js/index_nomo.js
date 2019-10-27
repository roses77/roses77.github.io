eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(M).N(3(){o d=0;o b=0;o c=t;o a=0;$(".y,.z").g().h(3(){$(2).1(".A").B(8)});$(".y,.z").g().L(3(){$(2).1(".A").O(8)});$(".u").g().h(3(){$(2).1("#u").1("l").1("m").1(".J").1("k").n(3(e,f){c+=8;$(2).9(c).6({5:0},s,"4")});$(2).1("#u").1(".K").1(".P").1("a").n(3(e,f){a+=t;$(2).9(a).6({5:0},8,"4")})});$(".x").g().h(3(){$(2).1("#x").1("#U").1(".V").1("D").6({5:"0"},7,"4")});$(".S").g().h(3(){$(2).1(".i").1(".q").1("r").1("b").6({5:"0"},7,"4");$(2).1(".i").1(".q").1("r").1("v").9(8).6({5:"0"},7,"4");$(2).1(".i").1(".q").1("r").1("p").9(T).6({5:"0"},7,"4");$(2).1(".i").1(".w").1("#R").6({5:"0"},7,"4");$(2).1(".i").1(".w").1("p").9(8).6({5:"0"},7,"4")});$(".j").g().h(3(){b=0;$(2).1("#j").1(".C").1("b").6({5:"0"},7,"4");$(2).1("#j").1(".C").1("v").9(8).6({5:"0"},7,"4");$(2).1("#j").1("l").1("m").n(3(e,f){b+=8;$(2).1("a").1("D").9(b).6({5:0},s,"4")})});$(".H").1("#I").1(".E").1(".F").1(".G").1("l").1("m").1("a").Q("<k></k>");$(".H").g().h(3(){a=0;$(2).1("#I").1(".E").1(".F").1(".G").1("l").1("m").n(3(e,f){a+=t;$(2).1("a").1("k").9(a).B(s)})})});',58,58,'|children|this|function|easeOutBack|top|animate|800|300|delay|||||||stop|mouseenter|case1|advantage|div|ul|li|each|var||widge_hd|span|500|100|servers|h2|c_search|about|widget|pic_out2|over|fadeOut|advantage_hd|img|band_logo|band_logo_out|band_logo_in|bands|band|s_pic|servers_hd|mouseleave|document|ready|fadeIn|star_s|append|searchform|case|600|about_in|a_png'.split('|'),0,{}))


$(document).ready(function(){ 

  $(".close_order").click(function() { $(".shop_form").fadeOut(500);});
$("#nogallery_enter").children(".list-h, #enter_xz").remove();
$('#nav .menu_nav li').not(".sub-menu li").append('<div class="hover"><\/div>');
$('#nav .menu_nav li .sub-menu li').children("ul").addClass("block")
$('#nav .menu_nav li,.menu_tages li').hover(
function() {
$(this).children(".sub-menu").stop(true, true).fadeIn('200');},
function() {
$(this).children(".sub-menu").stop(true, true).fadeOut('1000');
	}
)
$('#nav .menu_nav li').not(".current-menu-item,.current-menu-ancestor,.current-category-ancestor").hover(
function() {
$(this).children('.hover').stop(true, true).fadeIn('200');
},
function() {
$(this).children('.hover').stop(true, true).fadeOut('1000');
});
$(".kefu_d").stop().mouseenter(function() {$(this).children("div").fadeIn(300);});
    $(".kefu_d").stop().mouseleave(function() {$(this).children("div").fadeOut(300);});
	$("#pic").stop().mouseenter(function() {$(this).children("a.prve").animate({"left":"-73px"},600);});
    $("#pic").stop().mouseleave(function(){$(this).children("a.prve").animate({"left":"0"},600);});
	$("#pic").stop().mouseenter(function() {$(this).children("a.next").animate({"right":"-73px"},600);});
    $("#pic").stop().mouseleave(function(){$(this).children("a.next").animate({"right":"0"},600);});
	
	$("#enter_xz,#pic2").stop().mouseenter(function() {$(this).children("a.prve").animate({"left":"0"},300,'easeOutBack');});
    $("#enter_xz,#pic2").stop().mouseleave(function(){$(this).children("a.prve").animate({"left":"-100px"},300,'easeOutBack');});
	$("#enter_xz,#pic2").stop().mouseenter(function() {$(this).children("a.next").animate({"right":"0"},300,'easeOutBack');});
    $("#enter_xz,#pic2").stop().mouseleave(function(){$(this).children("a.next").animate({"right":"-100px"},300,'easeOutBack');});
	
	$("#advantage li").stop().mouseenter(function() {
		$(this).children("div").animate({"top":"132px"},600,'easeOutBack');
		$(this).children("div").children("span").fadeIn(300);
	
	});
    $(".a_png").click(function(){
		$(this).fadeOut(500);
		$(this).next(".vidio_ship").fadeIn(800);
		
	  
	});
	 $("#content_shop_btn").click(function(){
		$(this).addClass("cutyes");
		$("#comment_shop_btn").removeClass("cutyes");
		$("#comment_shop").fadeOut(300);
		$("#content_shop").fadeIn(300);

	});
	
		 $("#comment_shop_btn").click(function(){
		$(this).addClass("cutyes");
		$("#content_shop_btn").removeClass("cutyes");
			$("#content_shop").fadeOut(300);
		$("#comment_shop").fadeIn(300);
	

	});

	$("#advantage li").stop().mouseleave(function() {
		$(this).children("div").animate({"top":"206px"},600,'easeOutBack');
		$(this).children("div").children("span").fadeOut(300);
	
	});
	
	$(".case_pic li").stop().mouseenter(function() {
		$(this).children(".hover_case").animate({"bottom":"-10px"},600,'easeOutBack');
		$(this).children(".hover_case_shop").animate({"bottom":"-10px"},600,'easeOutBack');
		
		$(".case_pic li .bottom_tucase").fadeIn(300);
		$(this).children(".bottom_tucase").fadeOut(100);
		});
	$(".case_pic li").stop().mouseleave(function(){$(this).children(".hover_case").animate({"bottom":"-85px"},600,'easeOutBack');	
	$(this).children(".hover_case_shop").animate({"bottom":"-64px"},600,'easeOutBack');
	});
	
	$(".case_pic").stop().mouseleave(function(){	$(".case_pic li .bottom_tucase").fadeOut(300);	});


$(".case1 ul li a,#case2 ul li a").stop().mouseenter(function() {$(this).children(".case_t,b,.title_dese").animate({"bottom":"0"},600,'easeOutExpo');
 $(this).children(".case_title").animate({"bottom":"-29px"},600);
});
 $(".case1 ul li a,#case2 ul li a").stop().mouseleave(function(){
	 $(this).children(".case_t,b,.title_dese").animate({"bottom":"-90px"},600);
	  $(this).children(".case_title").animate({"bottom":"0"},600);
 
 });
$(".lsit_hover ul.list-h li a").stop().mouseover(function() {  
 
$(".product_pic .loading").fadeIn();
if($(".product_pic img").load){$(".product_pic .loading").fadeOut(0); }

$(".product_pic img").attr("src",$(this).attr("rel"));
if($(this).attr("rel") ==  $(".product_pic img").attr("src")){
	$(".lsit_hover ul.list-h li").removeClass("bodee");
	$(this).parent("li").addClass("bodee");
	}

});

	
$(".product_text a.btn").click(function() {
$(".shop_form").fadeIn(500);
var pos = $(".shop_form").offset().top -300;
$("html,body").animate({scrollTop: pos}, 1000);


}); 
 

var sumWidth =0;
$(".lsit_hover").children("ul").each(function(){
         $(this).css("width", 154*$(this).children("li").length+"px");
});

	var moveer =0;
    var gowidth =0;
var ulwidth = 160*$(".lsit_hover").children("ul").children("li").length;
$(".right_mian .product .list .next").click(function() {

	if($(".lsit_hover").children("ul").width() >=610){
	moveer += 567;
    gowidth += 975;
	  if( gowidth <=ulwidth) {
	$(this).prev(".lsit_hover").children("ul").animate({"margin-left":"-"+moveer+"px"},600,'easeInOutQuint')
}}
});
	$(".right_mian .product .list .prve").click(function() {
   moveer =0;
    gowidth =0;
	$(this).next(".lsit_hover").children("ul").animate({"margin-left":0},600,'easeInOutQuint')

	});
	
	
	
	$("#full_prodcts_single .product .list .next").click(function() {

	if($(".lsit_hover").children("ul").width() >=894){
	moveer += 576;
    gowidth += 975;
	  if( gowidth <=ulwidth) {
	$(this).prev(".lsit_hover").children("ul").animate({"margin-left":"-"+moveer+"px"},600,'easeInOutQuint')
}}
});
	$("#full_prodcts_single .product .list .prve").click(function() {
   moveer =0;
    gowidth =0;
	$(this).next(".lsit_hover").children("ul").animate({"margin-left":0},600,'easeInOutQuint')

	});

	
$("#enter_xz,#enter_xz ul li").css("width",$("#enter_xz").children("ul li img").width());
$("#enter_xz,#enter_xz ul li").css("hight",$("#enter_xz").children("ul li img").hight());






 
});  


function AddFavorite(sURL, sTitle) {
        sURL = encodeURI(sURL);
	try{
	    window.external.addFavorite(sURL, sTitle);
		}catch(e) {
    try{
	    window.sidebar.addPanel(sTitle, sURL, "");
		}catch (e) {
    alert("您的浏览器不支持自动加入收藏夹，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
	    }   }    }
    //设为首页
    function SetHome(url){
	if (document.all) {
        document.body.style.behavior='url(#default#homepage)';
	    document.body.setHomePage(url);
	}else{             
	    alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
		} 
        }




jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});
