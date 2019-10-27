// JavaScript Document

$(document).ready(function(){ 
	//文章详细菜单，定位锚点位置
	var hash=window.location.hash;
	var initHash = 0;
	if(hash){
		var index = hash.toString().substr(hash.toString().length-1);
		if(index == 5){
			initHash = 5;
			$(hash).height(20);
		}else{
			$(hash).height(64);
		}
		
	}
	
	$(".header_page").css("height",$(window).height());
	
	function textCenter(){
		$(".banner").css({
			position:"absolute"
		});
	
		$(".banner").css({
			left: ($(window).width() - $(".banner").outerWidth())/2,
			top: ($(window).height() - $(".banner").outerHeight())/2
		});
	}

	textCenter(); 

	var iNum=0;
	var flag=false;
	function css(obj,attr,value){
		if(arguments.length==2){
			if(attr=="scrollbar"){
				return document.documentElement.scrollTop || document.body.scrollTop;
			}
		}else{
			document.documentElement.scrollTop=document.body.scrollTop=value;
		}
	}
	function starMove(obj,oTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var iSpeed=0;
			var iCur=0;
			var bStop=true;
			for(var attr in oTarget){
				iCur=css(obj,attr);
				iSpeed=(oTarget[attr]-iCur)/5;
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				if(iCur!=oTarget[attr]){
					bStop=false;
					css(obj,attr,iCur+iSpeed);
				}
				flag=true;
			}
			if(bStop){
				clearInterval(obj.timer);
			}
		},15)
	};
	var onesize1,onesize2,onesize3,onesize4,onesize5;
	getHeight();
	
	function getHeight(){
		onesize1=$(".header_page").height()-92;
		console.log("the value of onesize1 is " + onesize1);
		onesize2=$(".mass1").height();
		
		console.log("the value of onesize2 is " + onesize2);
		onesize3=$(".mass2").height();
		
		console.log("the value of onsize3 is " + onesize3);
		
		onesize4= $(".mass3").height();
		console.info(onesize3+","+onesize4)
		onesize5=$(document).height()-$(window).height()-onesize1-onesize2-onesize3-onesize4;
	}

	$(".main_menu li.nav1").click(function(){
		
		$(hash).height(0);
		initHash =0;
		starMove(document,{'scrollbar':0})
	});
	$(".main_menu li.nav2").click(function(){
		$(hash).height(0);
		initHash =0;
		starMove(document,{'scrollbar':onesize1})
	});
	$(".main_menu li.nav3").click(function(){
		$(hash).height(0);
		initHash =0;
		starMove(document,{'scrollbar':onesize1+onesize2})
	});
	$(".main_menu li.nav4").click(function(){
		$(hash).height(0);
		initHash =0;
		starMove(document,{'scrollbar':onesize1+onesize2+onesize3})
	});
	$(".main_menu li.nav5").click(function(){
		$(hash).height(0);
		initHash =0;
		starMove(document,{'scrollbar':onesize1+onesize2+onesize3+onesize4});
	});
	
	$(".main_menu li.nav6").click(function(){
		
		$(hash).height(0);
		initHash =0;
		starMove(document,{'scrollbar':$(document).height()-20});
		$(".main_menu li").removeClass("on");
		$(this).addClass("on");
	});
	
	$(window).on("scroll resize",function(){
		$(".header_page").css("height",$(window).height());
		textCenter();
		getHeight();
		if($(window).scrollTop()>= 0 && $(window).scrollTop()<onesize1){
			iNum = 0;	
		}else if($(window).scrollTop()>=onesize1 && $(window).scrollTop()<onesize1+onesize2){
			iNum = 1;
		}else if($(window).scrollTop()>=onesize1+onesize2 && $(window).scrollTop()<onesize1+onesize2+onesize3){
			iNum = 2;
		}else if($(window).scrollTop()>=onesize1+onesize2+onesize3 && $(window).scrollTop()<onesize1+onesize2+onesize3+onesize4){
			iNum = 3;
		}else if($(window).scrollTop()>=onesize1+onesize2+onesize3+onesize4 && $(window).scrollTop()<=onesize1+onesize2+onesize3+onesize4 +92){
				iNum = 4;
		}else{
			iNum =5;
		}
		
		if(initHash==5){
			iNum = 5;
			initHash = 0;
		}
		
		if(flag==false){
			clearInterval(document.timer);
		}
		flag=false;
		if($(window).scrollTop()>=onesize1){
			$(".top_bar").css("display","block")
			$(".main_menu li").attr("class","");
			$(".main_menu li").eq(iNum).attr("class","on");
		}else{
			$(".top_bar").css("display","none")
			$(".main_menu li").attr("class","");
		}
	})
	
	$(".i_arrow").click(function(){
		starMove(document,{'scrollbar':onesize1})
	})
	
	$("#logo").click(function(){
		starMove(document,{'scrollbar':0})
	});
	
	var tabs = [];
	var currentIndex = 2;
	tabs = $(".tab");
	$("#left").click(function(){
		
		$(tabs[currentIndex-1]).removeClass("visible").addClass("invisible");
		currentIndex--;
		if(currentIndex < 1){
			currentIndex = tabs.length;
		}
		
		$(tabs[currentIndex-1]).removeClass("invisible").addClass("visible");
	});
	
	$("#right").click(function(){
		$(tabs[currentIndex-1]).removeClass("visible").addClass("invisible");
		currentIndex++;
		if(currentIndex > tabs.length){
			currentIndex = 1;
		}
		
		$(tabs[currentIndex-1]).removeClass("invisible").addClass("visible");
		
	});
	
	var tabs2 = [];
	var currentIndex2 = 1;
	tabs2 = $(".tab2");
	$("#left2").click(function(){
		
		$(tabs2[currentIndex2-1]).removeClass("visible").addClass("invisible");
		currentIndex2--;
		if(currentIndex2 < 1){
			currentIndex2 = tabs2.length;
		}
		
		$(tabs2[currentIndex2-1]).removeClass("invisible").addClass("visible");
	});
	
	$("#right2").click(function(){
		$(tabs2[currentIndex2-1]).removeClass("visible").addClass("invisible");
		currentIndex2++;
		if(currentIndex2 > tabs2.length){
			currentIndex2 = 1;
		}
		
		$(tabs2[currentIndex2-1]).removeClass("invisible").addClass("visible");
		
	});
})
