var B = {
	_set : {
		loginUrl : "", //session timeout
		debug : true
	},
	debug : function(msg) {
		if (this._set.debug) {
			if (typeof (console) != "undefined")
				console.log(msg);
			else
				alert(msg);
		}
	},
	ajaxError : function(xhr, ajaxOptions, thrownError) {
		B.debug(xhr);
	},
	jsonEval : function(data) {
		try {
			if ($.type(data) == 'string')
				return eval('(' + data + ')');
			else
				return data;
		} catch (e) {
			return {};
		}
	},
	recoverSubmitBtn : function(txtStr) {
		$(".J-submit").val(txtStr);
		$(".J-submit").removeClass("disabled").removeAttr("disabled");
	},
	showErr : function(errElement , errTxt){
		errElement.addClass("active").removeAttr("style").html(errTxt);
	},
	findErrElement : function(errInput){
		return errInput.parent().children('.error');
	},
	validateCallback : function(form, callback) {
		var $form = $(form);

		$(".J-submit").val("提交中");
		$(".J-submit").addClass("disabled").attr("disabled", "disabled");
		$.ajax({
			type : form.method || 'POST',
			url : $form.attr("action"),
			data : $form.serializeArray(),
			dataType : "json",
			cache : false,
			success : callback,
			error : B.ajaxError
		});

		return false;
	}
}

;
$(function() {
	var $regPhone = $(".regPhone");
	var $imgVeryCode = $(".img-verify-input");
	var $getVerifyCodeBtn = $(".sms-verify");
	var $phoneErr = $regPhone.parent(".form-group").find(".error");
	var $imgVeryCodeErr = $imgVeryCode.parent(".form-group").find(".error");
	var loadReg = function(){

		$('.form-wrap').validator({ 
		    focusCleanup: true,
		    stopOnError:true,
		    //debug: true,
		    timely: 2,
		    //自定义规则（PS：建议尽量在全局配置中定义规则，统一管理）
		    rules: {
		        username: [/^[a-zA-Z0-9]+$/, '用户名无效! 仅支持字母与数字。'],
		        tel: [/^0?(13|15|17|18)[0-9]{9}$/, '手机号格式有误'],
		        smsCode: [/^[1-9]{4}$/, '短信验证码格式有误'],
		        email: [/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i, '邮箱格式有误'],
		    },
		    fields: {
		        "username" : {
		            rule : "required;",
		            msg : {required:"姓名不能为空"}
		        },
		        "contact" : {
		            rule : "required;",
		            msg : {required: "联系方式不能为空"}
		        },
		        "content" : {
		            rule : "required;",
		            msg : {required : "内容不能为空"}
		        },
		        "verifycode" : {
		            rule : "required;",
		            msg : {required:"验证码不能为空"}
		        }
		    },
		    //验证成功
		    valid: function(form) {
		    	if(form.id == 'form-info'){
					var options = {id:'maskLayer', status:0, zIndex:99, bgColor:'#111', opacity:0.8};
					maskLayer(options);
					$('.verifylayer').show();
		    	}else if(form.id == 'form-verify'){
		    		save();
		    	}     
		  		return false;
		    }
		});
	};
	usedefaultAssetLogo();
	loadReg();

	$('.J-LayerClose').click(function (){
	    var options = {id:'maskLayer', status:1};
	    maskLayer(options);
	    $('.layer').hide();
	});

	$('#imgObj').click(function (){
	    changeImg();
	});

	//查看职位详情
    $('.J-viewJob').click(function(){
        $this = $(this);
        
        var title = $this.parent('.job-item').children('.tit2').html();
        var intro = $this.parent('.job-item').children('.intro').html();
        var duty = $this.parent('.job-item').children('.duty').html();
        var demand = $this.parent('.job-item').children('.demand').html();
        var options = {id:'maskLayer', status:0, zIndex:99, bgColor:'#111', opacity:0.8};

        $('.J-jobLayer .tit2').html(title);
        $('.J-jobLayer .intro').html(intro);
        $('.J-jobLayer .duty').html(duty);
        $('.J-jobLayer .demand').html(demand);

        $('body').css('overflow', 'hidden');
        
        maskLayer(options);
        $('.J-jobLayer').show();
    });
    $('.J-jobLayerClose').click(function(){
        var options = {id:'maskLayer', status:1};
        maskLayer(options);
        $('body').css('overflow', 'auto');
        $('.J-jobLayer').hide();
    });

    $(window).scroll(function() {

    	var scrollTop = $(window).scrollTop();
    	var height = $(window).height();

    	if($(".header").hasClass('header-index')){
	    	var scrollTop = $(window).scrollTop();
	        if(scrollTop >= 30){
	            $(".header").addClass("fixed");
	            $('.logo').attr('src', '//img.alicdn.com/imgextra/i1/1105832541/TB2kiVxXPzyQeBjy0FeXXbwyFXa_!!1105832541.png');
	        }else{
	            $(".header").removeClass("fixed");
	            $('.logo').attr('src', '//img.alicdn.com/imgextra/i4/1105832541/TB2nfIAXXHzQeBjSZFOXXcM9FXa_!!1105832541.png');
	        }
    	}

    	if(scrollTop >= (height+1200)){
	        $(".to-top").show();
    	}else{
    		$(".to-top").hide();
    	}
    });

    $('.J-toTop').click(smoothScrollToTopX);

    function smoothScrollToTopX(){
		var timeOut;
		var speed;
	    speed = speed || $(window).scrollTop() / 20;
	    if (speed){
	        window.scrollBy(0, -1*speed);
	        timeOut = setTimeout(smoothScrollToTopX, 0);
	    }
	    else {
	        clearTimeout(timeOut);
	        speed = null;
	    }
	}

    function smoothScrollToTop(){
		var timeOut;
		var speed;
	    speed = speed || ($(window).height()-$(window).scrollTop() ) / 50;
	    if ($(window).scrollTop() < ($(window).height()-60) ){
	        window.scrollBy(0, 1*speed);
	        timeOut = setTimeout(smoothScrollToTop, 0);
	    }
	    else {
	        clearTimeout(timeOut);
	        speed = null;
	    }
	}

	// function smoothScrollToTop2(){
	// 	var timeOut;
	// 	var speed;
	//     speed = speed || ($(window).height()-$(window).scrollTop() ) / 50;
	//     if ($(window).scrollTop() < ($(window).height()-80) ){
	//         window.scrollBy(0, 1*speed);
	//         timeOut = setTimeout(smoothScrollToTop, 0);
	//     }
	//     else {
	//         clearTimeout(timeOut);
	//         speed = null;
	//     }
	// }

	// function smoothScrollToTop2(){
	// 	var timeOut;
	// 	var speed;
	//     speed = speed || (430-$(window).scrollTop() ) / 45;
	//     if ($(window).scrollTop() <= 290 ){
	//         window.scrollBy(0, 1*speed);
	//         timeOut = setTimeout(smoothScrollToTop2, 0);
	//     }
	//     else {
	//         clearTimeout(timeOut);
	//         speed = null;
	//     }
	// }

	// if($('.b-container').hasClass('aboutus')){
	// 	smoothScrollToTop2();
	// }

	$('.J-nextPage').click(smoothScrollToTop);

	var iSwiper = new Swiper('.swiper-container',{
	    //pagination: '.index-page',
	    speed:1000,
	    loop:true,
	    //grabCursor: true,

	    autoplay : 155000,
	    onlyExternal : false,
	    autoplayDisableOnInteraction:false,
	    autoplayStopOnLast : false,
	    //paginationClickable: true
	});
	$('.arrow-left').on('click', function(e){
		e.preventDefault()
		iSwiper.swipePrev()
	});
	$('.arrow-right').on('click', function(e){
		e.preventDefault()
		iSwiper.swipeNext()
	});

	$(window).scroll(function(){
        var windowH = $(window).height();
        // console.log((windowH+670+300));
        // console.log($(window).scrollTop());
        //数字资产
        if($(window).scrollTop() > (windowH+470/3.5)){
            $('.J-asset').addClass('animation');
        }

        if($(window).scrollTop() > (windowH+470+100)){
            $('.J-finance').addClass('animation');
        }

        if($(window).scrollTop() > (windowH+470+600+100)){
            $('.J-supply-chain').addClass('animation');
        }

        if($(window).scrollTop() > (windowH+470+600+600+100)){
            $('.J-share-bond').addClass('animation');
        }
        if($(window).scrollTop() > (windowH+470+600+600+600+100)){
            $('.J-fair-publicity').addClass('animation');
        }        
    });

    $('.icon-youjiantou').click(function(){
        if($('.avt-group').hasClass('active')){
            
        }else{
            $('.avt-group').addClass('active');
            $('.icon-youjiantou').removeClass('pointer');
            $('.icon-zuojiantou').addClass('pointer');
            $('.avt-group').animate({marginLeft:'-274px'}, 1000);
        }
        
    });

    $('.icon-zuojiantou').click(function(){
        if($('.avt-group').hasClass('active')){
            $('.icon-youjiantou').addClass('pointer');
            $('.icon-zuojiantou').removeClass('pointer');

            $('.avt-group').removeClass('active');
            $('.avt-group').animate({marginLeft:'0px'}, 1000);
            $('.icon-zuojiantou')
        }else{
            
        }
    });

    $

    if($(window).height() > ($('.footer').offset().top+214)){
		$('.footer').css('margin-top', $(window).height() - $('.footer').offset().top - 214);
	};

	// $('.particles-js').each(function(){
	// 	$(this).attr('id', 'particles-js'+$('.particles-js').index($(this)));
	// });

	var particlesObtion = {
		particles: {
			color: '#fff',
			shape: 'circle', // "circle", "edge" or "triangle"
			opacity: 1,
			size: 5,
			size_random: false,
			nb: 100,
			line_linked: {
				enable_auto: true,
				distance: 180,
				color: '#fff',
				opacity: 1,
				width: 1,
				condensed_mode: {
					enable: false,
					rotateX: 100,
					rotateY: 600
				}
			},
			anim: {
				enable: true,
				speed: 2
			}
		},
		interactivity: {
			enable: true,
			mouse: {
				distance: 300
			},
			detect_on: 'window', // "canvas" or "window"
			mode: 'grab',
			line_linked: {
				opacity: .5
			},
			events: {
				onclick: {
					enable: false,
					mode: 'push', // "push" or "remove"
					nb: 4
				}
			}
		},
		/* Retina Display Support */
		retina_detect: true
	};

	console.log("console"+canvasSupport());

	
	if($('.particles-js').length && canvasSupport()) particlesJS('particles-js', particlesObtion);
	//particlesJSS('particles-js1', particlesObtion);
	
});

function canvasSupport() {
    return !!document.createElement('canvas').getContext;
}

function usedefaultAssetLogo(){
	var browser={
	    versions:function(){
	        var u = navigator.userAgent, app = navigator.appVersion;
	        return {
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	            iPad: u.indexOf('iPad') > -1, //是否iPad
	            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
	        };
		}(),
		language:(navigator.browserLanguage || navigator.language).toLowerCase()
	};
	if(browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad){
		console.log($(window).height());
	    $('body').addClass('wap');
	    $('.wap .swiper-banner').height($(window).height());
	    $('.wap .swiper-banner .swiper-container').height($(window).height());
	}else{
		console.log("非手机版");
	}


}





    //弹出层
    function save(){
        
        var username = $('input[name="username"]').val();
        var contact = $('input[name="contact"]').val();
        var content = $('textarea[name="content"]').val();
        var imgVerifyCode = $("#imgVeryCode").val();

        

        $('#imgVeryCode').focus(function(){
        	$('form').validator('hideMsg', '#syserr');
        });

        $.ajax({
            type: 'GET',
            url:"http://o.micioe.net/bubi/ci/record",
            data:{'ci.name':''+username+'','ci.contact':''+contact+'','ci.remark':''+content+'','imgVeryCode':''+imgVerifyCode+''},
            dataType:"jsonp",
            jsonp: 'BUBI_CI_JSONP',
            success: function(json){                
                if(parseInt(json.err_code)){
                	$('form').validator('showMsg', '#syserr', {type: "error", msg: json.msg});
                }else{
                	alert('感谢您的来信，我们将尽快处理');
                	window.location.reload();
                }
            },
            error: function(e){}
        });    
    }


function changeImg() {
    var imgSrc = $("#imgObj");
    var src = imgSrc.attr("src");
    imgSrc.attr("src", chgUrl(src));
}
function chgUrl(url) {
    var timestamp = (new Date()).valueOf();
    url = url.split("?").shift();
    if ((url.indexOf("&") >= 0)) {
        url = url + "×tamp=" + timestamp;
    } else {
        url = url + "?timestamp=" + timestamp;
    }
    return url;
}

function maskLayer(options){
    var bgColor = options.bgColor || '#000';
    var opacity = options.opacity || 0.3;
    var zIndex = options.zIndex || 1;
    var status = options.status;
    if(status == 0){
        $('<div id="'+ options.id +'"></div>').css({
            position:"absolute", top:0, left:0, zIndex:zIndex,
            width:$(document).width(), height:$(document).height(),
            background:bgColor, opacity:opacity, filter:"Alpha(Opacity = " + opacity*100 +")"
        }).appendTo("body");
    }else{
        $("#" + options.id).remove();
    }
}