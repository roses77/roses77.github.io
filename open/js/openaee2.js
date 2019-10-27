$(function(){
	var active_index = 0;
	var next_index = 0;
	var banner_interval = null;
	
	$("#js-slides-pagination li").click(function(){
		var index = $(this).index();

		var li_obj = $("#js-slides-pagination li");
		var slides_class = "active";

		if(li_obj.eq(index).attr("class") != slides_class){
			window.clearInterval(banner_interval);

			li_obj.removeClass().stop().eq(index).addClass(slides_class);
			
			var obj = $("#js-slides-control a");
			var w = document.documentElement.clientWidth;
			var active_left = 0;
			var next_left = 0;

			//手动切换轮播图片时，会有图片的前后区分动画
			if(active_index < index){
				//选中的图片在当前图片的右边时
				//当前图片的位置要往左边
				active_left = -w;
				//选中图片的位置要在右边
				next_left = w;
			}else if(active_index > index){
				//选中的图片在当前图片的左边时
				//当前图片的位置要往右边
				active_left = w;
				//选中图片的位置要在左边
				next_left = -w;
			}
			//点击下一张图片后需重置这张图片的起始位置进行移动
			obj.eq(index).css("left", next_left);

			//当前图片移动
			obj.eq(active_index).animate({"left": active_left,"z-index":0});
			//选中图片移动到当前位置
		    obj.eq(index).animate({left:0,"z-index":10});

		    //重新记忆当前图片的索引
		    active_index = index;

		    //自动切换时，重新记忆下一张图片的索引
		    next_index = index++;
		    bannerStart();
		}
	});

	function resetImgLeft(start){
		var w = document.documentElement.clientWidth;
		var obj = $("#js-slides-control a");
		for(var i = start+1; i < obj.length; i++){
			obj.eq(i).css({"left":w});
		}
	}
	resetImgLeft(active_index);

	function autoShow(){
		var li_obj = $("#js-slides-pagination li");
		var obj = $("#js-slides-control a");
		var w = document.documentElement.clientWidth;
		var slides_class = "active";

		next_index++;
		if(next_index >= obj.length){
			next_index = 0;
		}
		if(obj.length>1){
			//自动轮播时，图片始终都是从左至右滑动切换
			obj.eq(next_index).css("left", w);

			li_obj.removeClass().stop().eq(next_index).addClass(slides_class);
			obj.eq(active_index).animate({"left": -w,"z-index":0});
			obj.eq(next_index).animate({left:0,"z-index":10});

			active_index = next_index;
		}
		
	}

	function bannerStart(){
		banner_interval = window.setInterval(autoShow, 3000);
	}
	bannerStart();
});

/*验证注册*/
function checkRregisterForm(){
	if(checkEmail() && checkPwd() && checkConfirmPwd() && checkCode()){
		return true;
	}
	return false;
}

/*验证登录*/
function checkLoginForm(){
	if(checkEmail() && checkPwd() && checkCode()){
		return true;
	}
	return false;
}

/*验证找回密码第一步*/
function checkRePwdForm(){
	if(checkEmail() && checkCode()){
		return true;
	}
	return false;
}

/*验证找回密码第二步*/
function checkRePwdForm2(){
	if(checkCode()){
		return true;
	}
	return false;
}

/*验证找回密码第三步*/
function checkRePwdForm3(){
	if(checkPwd() && checkConfirmPwd()){
		return true;
	}
	return false;
}

//显示提示信息
function showErrorTip(tip_msg){
	var check = true;
	if(tip_msg != ""){
		$("#js-tip-msg").html(tip_msg).css("visibility","visible");
		check = false;
	}
	return check;
}

//验证邮箱
function checkEmail(){
	var email = $("#js-email");
	var email_regex = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
	var tip_msg = "";

	if(email_regex.test($.trim(email.val())) == false){
		tip_msg = "请输入有效的邮箱地址！";
		email.focus();
	}
	return showErrorTip(tip_msg);
}

//验证密码
function checkPwd(){
	var pwd = $("#js-pwd");
	var tip_msg = "";

	if($.trim(pwd.val()) == ""){
		tip_msg = "请输入有效密码！";
		pwd.focus();
	}
	return showErrorTip(tip_msg);
}

//验证确认密码
function checkConfirmPwd(){
	var pwd = $("#js-pwd");
	var confirm_pwd = $("#js-confirm-pwd");
	var tip_msg = "";

	if($.trim(confirm_pwd.val()) != $.trim(pwd.val())){
		tip_msg = "两次密码输入不一致！";
		confirm_pwd.focus();
	}
	return showErrorTip(tip_msg);
}

//验证验证码
function checkCode(){
	var code = $("#js-code");
	var tip_msg = "";

	if($.trim(code.val()) == ""){
		tip_msg = "请输入验证码！";
		code.focus();
	}
	return showErrorTip(tip_msg);
}

function previewImg(file_id, pre_id) {
	var file_obj = document.getElementById(file_id);

    var img_id = Math.random().toString(36).substr(2);
	var pre_obj = document.getElementById(pre_id);
    pre_obj.innerHTML = '<img id="' + img_id + '"  />';

    var imgObjPreview = document.getElementById(img_id);

    if (file_obj.files && file_obj.files[0]) {
    	imgObjPreview.src = window.URL.createObjectURL(file_obj.files[0]);
    }else{
        //IE下，使用滤镜
        file_obj.select();
   		document.getElementById('js-pic-div').focus(); 
        var imgSrc = document.selection.createRange().text;

        //图片异常的捕捉，防止用户修改后缀来伪造图片
        try {
            imgObjPreview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObjPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }catch(e){
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

//高亮样式
function menuLight(obj, class_name){
 	obj.addClass(class_name);
}

//selected
function selectObj(obj, class_name){
	obj.siblings().removeClass(class_name);
	obj.addClass(class_name);
}