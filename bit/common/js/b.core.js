var B = {
	_set : {
		loginUrl : "", // session timeout
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
	showErr : function(errElement, errTxt) {
		errElement.addClass("active").removeAttr("style").html(errTxt);
	},
	findErrElement : function(errInput) {
		return errInput.attr('id');
	},
	validatorShowErr : function(id, msg) {
		$('form').validator('showMsg', '#' + id, {
			type : "error",
			msg : msg
		});
	},
	simpleAjax:function(url , callback , method){
		$.ajax({
			type: method || 'POST',
			url:url,
			dataType:"json",
			cache: false,
			success: callback,
			error: B.ajaxError
		});
		return false;
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
	},
	maskLayer : function(options) {
		var bgColor = options.bgColor || '#000000';
		var opacity = options.opacity || 0.3;
		var zIndex = options.zIndex || 1;
		var status = options.status;
		if (status == 0) {
			$('<div id="' + options.id + '"></div>').css({
				position : "absolute",
				top : 0,
				left : 0,
				zIndex : zIndex,
				width : $(document).width(),
				height : $(document).height(),
				background : bgColor,
				opacity : opacity,
				filter : "Alpha(Opacity = " + opacity * 100 + ")"
			}).appendTo("body");
		} else {
			$("#" + options.id).remove();
		}
	},
	callback : {
		userRegStep1 : function(response) {
			if (response.err_code == '0') {
				window.location = serverUrl + "user/add2Info";
				return;
			}

			var errElement;
			switch (response.err_code) {
			case '20001':
			case '20012':
				errElement = B.findErrElement($("input[name='user.userName']"));
				break;
			case '20002':
			case '20003':
			case '20004':
				errElement = B
						.findErrElement($("input[name='user.imgVeryCode']"));
				break;
			case '20005':
			case '20006':
			case '20007':
				errElement = B.findErrElement($("input[name='user.SMSCode']"));
				break;
			case '20008':
			case '20009':
			case '20010':
			case '20028':
				errElement = B.findErrElement($("input[name='user.pwd']"));
				break;
			default:
				errElement = B.findErrElement($(".J-submit"));
			}

			B.validatorShowErr(errElement, response.msg);
			if (response.err_code == '20003' || response.err_code == '20004') {
				$(".img-verify").click();
			}
			B.recoverSubmitBtn("下一步");
		},
		userRegStep2 : function(response) {
			if (response.err_code == '0') {
				window.location = serverUrl + "user/regSuccess";
				return;
			}
			var errElement;
			switch (response.err_code) {
			case '20018':
			case '20019':
				errElement = B.findErrElement($("input[name='user.realName']"));
				break;
			case '20020':
			case '20021':
				errElement = B.findErrElement($("input[name='user.email']"));
				break;
			case '20022':
				errElement = B
						.findErrElement($("input[name='user.introduce']"));
				if (errElement.length == 0)
					errElement = B
							.findErrElement($("textarea[name='user.introduce']"));
				break;
			case '20023':
			case '20024':
				errElement = B.findErrElement($("input[name='user.company']"));
				break;
			case '20025':
			case '20026':
				errElement = B
						.findErrElement($("input[name='user.companyUrl']"));
				break;
			case '20027':
				errElement = B
						.findErrElement($("input[name='user.companyAddress']"));
				break;
			default:
				errElement = B.findErrElement($(".J-submit"));
			}
			$("input[name='user.token']").val(response.data);

			B.validatorShowErr(errElement, response.msg);
			B.recoverSubmitBtn("提交申请");
		},
		userLogin : function(response) {
			if (response.err_code == '0') {
				$("body").append(response.data.ucsysnlogin);
				setTimeout(function(){
					window.location = serverUrl + "user/userInfo";
				}, 1200);
			}
			var errElement;
			switch (response.err_code) {
			case '20001':
				errElement = B.findErrElement($("input[name='userName']"));
				break;
			case '20008':
				errElement = B.findErrElement($("input[name='password']"));
				break;
			default:
				errElement = B.findErrElement($(".J-submit"));
			}

			B.validatorShowErr(errElement, response.msg);
			B.recoverSubmitBtn("登 录");
		},
		userLogout:function(response){
			if(response.err_code == "0"){
				$("body").append(response.data.ucsysnlogin);
				setTimeout(function(){
					history.go(0);
				},1200);
			}
		},
		modifyLogo:function(response){
			if(response.err_code == "0"){
				$("body").append(response.data);
			}
		},
		setUrl : function(response) {
			if (response.err_code == '0') {
				window.location = serverUrl + "user/userInfo";
				return;
			}
			alert(response.msg);
		},
		getKey : function(response) {
			if (response.err_code == '0') {
				$("#secret").html(response.data);
				$("#secret").addClass("item-intro");
				$(".view").hide();
				// 关闭弹层
				options = {
					id : 'maskLayer',
					status : 1
				};
				B.maskLayer(options);
				$('.viewkeyt').css('display', 'none');
				return;
			}

			$('.J-viewkeytWrap input').val("");
			B.validatorShowErr("getKey-pwd", response.msg);
			B.recoverSubmitBtn("确定");
		}
	}
}

;
$(function() {
	var $regPhone = $(".regPhone");
	var $imgVeryCode = $(".img-verify-input");
	var $getVerifyCodeBtn = $(".sms-verify");
	var $phoneErr = $regPhone.parent(".form-group").find(".error");
	var $imgVeryCodeErr = $imgVeryCode.parent(".form-group").find(".error");
	var msg = {
		txtStr0 : "手机号不能为空",
		txtStr1 : "短信验证码不能为空",
		txtStr2 : "密码不能为空",
		txtStr3 : "图片验证码不能为空",
		formatErr0 : "请输入正确手机号",
		regErr0 : "该手机号码已经存在",
		regErr1 : "失败次数超限，被冻结5分钟",
		regOk : "注册成功",
		reging : "正在提交",
		regTxt : "注册",
		btnTxt : "获取短信验证码"
	};

	var loadReg = function() {

		var getVerifyCodeFunOfReg = function() {
			B.debug("调用getVerifyCodeFun");

			// if ($imgVeryCode.val() == "") {
			//
			// B.validatorShowErr('control2', msg.txtStr3);
			// $getVerifyCodeBtn.removeClass("disabled").one("click",
			// getVerifyCodeFunOfReg);
			// return;
			// }

			$getVerifyCodeBtn.addClass("disabled");

			$.ajax({
				url : serverUrl + "user/getVerifyPhoneCodeOfReg?phone="
						+ $regPhone.val() + "&imgVeryCode="
						+ $imgVeryCode.val(),
				type : 'GET',
				cache : false,
				success : function(response) {
					var json = B.jsonEval(response);
					B.debug(json.err_code);
					if (json.err_code == "20002" || json.err_code == "20003"
							|| json.err_code == "20004") {

						B.validatorShowErr('control2', json.msg);
						$(".img-verify").click();
						$getVerifyCodeBtn.removeClass("disabled").html(
								msg.btnTxt);
						$getVerifyCodeBtn.unbind("click").one("click",
								getVerifyCodeFunOfReg);

					} else if (json.err_code != "0") {

						B.debug(json.msg);
						// 为了满足“只有倒计时才置灰”
						$getVerifyCodeBtn.removeClass("disabled").html(
								msg.btnTxt);
						$getVerifyCodeBtn.unbind("click").one("click",
								getVerifyCodeFunOfReg);
						B.validatorShowErr('controlwertyui', json.msg);
					} else {

						sendMsgCode();

					}
				},
				error : B.ajaxError
			});

		};

		$getVerifyCodeBtn.unbind("click").one("click", getVerifyCodeFunOfReg);
		// 发送手机验证码
		var sendMsgCode = function() {
			var n = 1;
			var id = setInterval(reflushCode, 1000);
			function reflushCode() {
				if (n > 89) {
					clearInterval(id);
					$getVerifyCodeBtn.removeClass("disabled").removeClass(
							"countDown").html(msg.btnTxt);
					$getVerifyCodeBtn.unbind("click").one("click",
							getVerifyCodeFunOfReg);

				} else {
					$getVerifyCodeBtn.addClass("disabled")
							.addClass("countDown").html((90 - n) + "秒后重试")
							.unbind("click");
					n++;
				}
			}
			;
		};

		var onRegPhoneInputFun = function(ele) {
			var tel = "^0?(13|15|17|18)[0-9]{9}$";
			if (new RegExp(tel).test(ele.value)) {

				var $that = $regPhone;
				var flag = false;
				// 清空
				// $getVerifyCodeBtn.unbind("click").addClass("disabled");
				$phoneErr.removeClass("active");

				// 检查该手机是否已注册
				return $.ajax({
					url : serverUrl + "user/checkUserName?userName="
							+ $that.val(),
					type : 'GET',
					async : false,
					cache : false,
					success : function(response) {
						var json = B.jsonEval(response);
						console.log(json);
						if (json.err_code == "0") {
							// $getVerifyCodeBtn.unbind("click").addClass("disabled");
							$getVerifyCodeBtn.unbind("click").one("click",
									getVerifyCodeFunOfReg);
							setTimeout(function() {
								B.validatorShowErr('controlwertyui',
										"该手机号已注册，请登录");
							}, 0);
						} else {
							flag = true;
							if (!$getVerifyCodeBtn.hasClass("countDown")) {
								$getVerifyCodeBtn.removeClass("disabled")
										.unbind("click").one("click",
												getVerifyCodeFunOfReg);
							}
						}
					},
					error : B.ajaxError
				});
			}
		};

		$('.form-wrap')
				.validator(
						{
							focusCleanup : true,
							stopOnError : true,
							// debug: true,
							timely : 1,
							// 自定义规则（PS：建议尽量在全局配置中定义规则，统一管理）
							rules : {
								username : [ /^[a-zA-Z0-9]+$/,
										'用户名无效! 仅支持字母与数字。' ],
								tel : [ /^0?(13|15|17|18)[0-9]{9}$/, '手机号格式有误' ],
								smsCode : [ /^[1-9]{4}$/, '短信验证码格式有误' ],
								email : [
										/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i,
										'邮箱格式有误' ],

								checkTel : function(ele) {
									onRegPhoneInputFun(ele);
								},

							},
							fields : {
								"user.userName" : {
									rule : "required; tel; checkTel",
									msg : {
										required : "手机号不能为空"
									}
								},
								"user.imgVeryCode" : {
									rule : "required;",
									msg : {
										required : "图片验证码不能为空"
									}
								},
								"user.SMSCode" : {
									rule : "required;",
									msg : {
										required : "短信验证码不能为空"
									}
								},
								"user.pwd" : {
									rule : "required;",
									msg : {
										required : "密码不能为空"
									}
								},
								"agreeprotocol" : {
									rule : "checked;",
									msg : {
										checked : "请确定已阅读《MicIoE@协议》"
									}
								},
								"user.realName" : {
									rule : "required;",
									msg : {
										required : "姓名不能为空"
									}
								},
								"user.email" : {
									rule : "required; email;",
									msg : {
										required : "邮箱不能为空"
									}
								},
								"user.company" : {
									rule : "required;",
									msg : {
										required : "公司名称不能为空"
									}
								},
								"userName" : {
									rule : "required;",
									msg : {
										required : "手机号不能为空"
									}
								},
								"password" : {
									rule : "required;",
									msg : {
										required : "密码不能为空"
									}
								},
								"url" : {
									rule : "required;",
									msg : {
										required : "url不能为空"
									}
								}
							},
							// 验证成功
							valid : function(form) {
								if (form.id == 'J-regStep1-frm') {
									B.validateCallback(form,
											B.callback.userRegStep1);
								} else if (form.id == 'J-regStep2P-frm') {
									B.validateCallback(form,
											B.callback.userRegStep2);
								} else if (form.id == 'J-regStep2C-frm') {
									B.validateCallback(form,
											B.callback.userRegStep2);
								} else if (form.id == 'J-login-frm') {
									B.validateCallback(form,
											B.callback.userLogin);
								} else if (form.id == 'J-setUrl-form') {
									B.validateCallback(form, B.callback.setUrl);
								} else if (form.id == 'J-getKey-form') {
									B.validateCallback(form, B.callback.getKey);
								}
							}
						});
	};
	loadReg();

	$('.J-viewkeyt').click(function() {
		var options = {
			id : 'maskLayer',
			status : 0,
			zIndex : 1,
			bgColor : '#111',
			opacity : 0.8
		};
		B.maskLayer(options);
		$('.viewkeyt').css('display', 'block');
	});
	$('.J-viewkeyt-cancel').click(function() {
		var options = {
			id : 'maskLayer',
			status : 1
		};
		B.maskLayer(options);
		$('.viewkeyt').css('display', 'none');
		$(".J-viewkeytWrap input[name='password']").val("");
		$('.n-msg').hide();
	});

	$(".J-doc dt").click(function() {
		var $this = $(this);
		var marker = $this.children('.marker').attr('data-marker');

		$(".J-doc dt").removeClass('current');
		$this.addClass('current');
		$(".J-doc .con").each(function() {
			if ($(this).attr('data-marker') == marker) {
				$(window).scrollTop($(this).offset().top - 80);
			}
		});
	});

	$('.service .meta')
			.mouseover(
					function() {
						$('.service .meta').removeClass('active').removeClass(
								'shadow');

						$(this).addClass('active').addClass('shadow');
						$('.service .meta').children('img')
								.each(
										function() {
											var imgSrc = serverUrl + "common/"
													+ "images/"
													+ $(this).attr('data-src')
													+ ".png";
											$(this).attr('src', imgSrc);
										});
						var thisImgSrc = serverUrl + "common/" + "images/"
								+ $(this).children('img').attr('data-src')
								+ "_active.png";
						$(this).children('img').attr('src', thisImgSrc);
					});

	$('.service .meta')
			.mouseout(
					function() {
						$('.service .meta').removeClass('active').removeClass(
								'shadow');

						$('.service .meta').children('img')
								.each(
										function() {
											var imgSrc = serverUrl + "common/"
													+ "images/"
													+ $(this).attr('data-src')
													+ ".png";
											$(this).attr('src', imgSrc);
										});

						var thisImgSrc = serverUrl
								+ "common/"
								+ "images/"
								+ $('.service .meta2').children('img').attr(
										'data-src') + ".png";
						$('.service .meta2').addClass('active').children('img')
								.attr('src', thisImgSrc);
					});

	setInterval(function() {
		var sdf = $(window).scrollTop();
		if (sdf >= 30) {
			$(".doc .menu").removeClass("uptoTop").addClass("init");
		} else {
			$(".doc .menu").removeClass("init").addClass("uptoTop");
		}
	}, 1);

	if ($(window).height() > ($('.bm-footer').offset().top + 304)) {
		$('.bm-footer').css('margin-top',
				$(window).height() - $('.bm-footer').offset().top - 304);
	}

	$(window).scroll(
			function() {
				var scrollTop = $(window).scrollTop();
				if ($(".bm-header").hasClass('bm-fixed')) {
					if (scrollTop >= 30) {
						$(".bm-header").addClass("fixed");
						$('.bm-logo').attr('src',"//img.alicdn.com/imgextra/i2/1105832541/TB2d2DaXK_yQeBjy0FlXXczrXXa_!!1105832541.png');
					} else {
						$(".bm-header").removeClass("fixed");
						$('.bm-logo').attr('src',"//img.alicdn.com/imgextra/i4/1105832541/TB2BP4fXpLzQeBjSZJiXXXesFXa_!!1105832541.png');
					}
				}
			});

	function waphack() {
		var browser = {
			versions : function() {
				var u = navigator.userAgent, app = navigator.appVersion;
				return {
					trident : u.indexOf('Trident') > -1, // IE内核
					presto : u.indexOf('Presto') > -1, // opera内核
					webKit : u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
					gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,// 火狐内核
					mobile : !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
					ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
					android : u.indexOf('Android') > -1
							|| u.indexOf('Linux') > -1, // android终端或者uc浏览器
					iPhone : u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
					iPad : u.indexOf('iPad') > -1, // 是否iPad
					webApp : u.indexOf('Safari') == -1
				// 是否web应该程序，没有头部与底部
				};
			}(),
			language : (navigator.browserLanguage || navigator.language)
					.toLowerCase()
		};
		if (browser.versions.mobile || browser.versions.ios
				|| browser.versions.android || browser.versions.iPhone
				|| browser.versions.iPad) {
			console.log($(window).height());
			$('body').addClass('wap');
			$('.wap .swiper-banner').height($(window).height());
			$('.wap .swiper-banner .swiper-container').height(
					$(window).height());
		} else {
			console.log("非手机版");
		}
	}
	waphack();
});