 $(document).ready(function(){
	  

      	   //顶部最后一个li竖线去掉
	   $(".top_nav li:last").css("background","none");
	   
	   //顶部二维码
	  $(".qr_weixin").hover(function(){
			  $(this).addClass("on");
			  $(this).find(".qr_box").slideDown();
		  },function(){
			  $(this).removeClass("on");
			  $(this).find(".qr_box").slideUp();
		  }
	  );  
	  //二级导航
	  $(".Nav li").hover(function(){
			  $(this).find(".Arr").css({left : $(this).offset().left + ($(this).width() - $(this).find('.Arr').width())/2 + 15 }).show();
			  $(this).find(".Subnav").css({width:$(window).width()}).show();
		  },function(){
			  $(this).find(".Arr").hide();
			  $(this).find(".Subnav").hide();
		  }
	  );  
	  
	 
		
	   //一流板块滑动效果
	  $(".Firstclass li").hover(function(){
			  $(".S-first",this).animate({left:  '0px'}, 300);
		  },function(){
			 $(".S-first",this).animate({left:  '-255px'}, 200);
		  }
	  ); 

		
     })
	 
	 //tab切换
	 function nTabs(thisObj,Num,curId){
		//if(thisObj.className == "active")return;
		//var tabObj = thisObj.parentNode.id;
		var tabList = document.getElementById("myTab"+curId).getElementsByTagName("li");
		for(i=0; i <tabList.length; i++)
		{
		  if (i == Num)
		  {
		   thisObj.className = "hover"; 
			  document.getElementById("myTab"+curId+"_Content"+i).style.display = "block";
		  }else{
		   tabList[i].className = "hout"; 
		   document.getElementById("myTab"+curId+"_Content"+i).style.display = "none";
		  }
		} 
		}


 //分公司解决方案
 $(".b-solution li").hover(function(){
         $(".b-link",this).animate({bottom:  '0px'}, 300);
     },function(){
         $(".b-link",this).animate({bottom:  '-40px'}, 200);
     }
 );

 //商城定制系列
 $(".Mall-list li").hover(function(){
         $(this).animate({top:  '-10px'}, 300).css("position","relative");
     },function(){
         $(this).animate({top:  '0px'}, 200);
     }
 );


 //移动定制系列
 $(".Mobile-list li").hover(function(){
         $(".text",this).animate({bottom:  '0px'}, 300).css("cursor","pointer");
     },function(){
         $(".text",this).animate({bottom:  '-112px'}, 200);
     }
 );

$(".price_nore").each(function(){
    $(this).hover(function(){
        $(this).addClass("price_hover").siblings(".price_nore").removeClass("price_hover");
    })
});

 //行业应用定制
 $(".Industry-list li").hover(function(){
         $("i",this).animate({top:  '-10px'}, 300).css("position","relative");
     },function(){
         $("i",this).animate({top:  '0px'}, 200);
     }
 );

 /* 产品页 产品列表模块 */
 $('.J-productList li').mouseenter(function(){
     $(this).siblings('.clone').remove();
     $(this).parent().css({position : 'relative'});
     $(this).parent().append($(this).clone().addClass('clone').css({backgroundColor : '#fff',position : 'absolute',borderWidth:1,left : $(this).position().left, top : $(this).position().top,width:$(this).width(),height:$(this).height(),boxShadow:'0 0 10px #eee'}).animate({left : $(this).position().left-10, top : $(this).position().top-10,width:$(this).width() + 20,height:$(this).height()+20}));
 })
 $('.J-productList').mouseleave(function(){
     $(this).children('.clone').animate({width : $(this).children('.clone').width()-20,height : $(this).children('.clone').height()-20,left: $(this).children('.clone').position().left+10,top: $(this).children('.clone').position().top+10},200,'linear',function(){
         $(this).remove();
     });
 })
 /* 产品页 解决方案模块 */
 $('.J-productSolution li').hover(function(){
     $(this).css({overflow : 'hidden',position:'relative',background:$(this).parent().attr('rev-bg')});
     $(this).children('.img').css({position : 'relative'}).animate({left:-$(this).width(),opacity:0},200,'linear',function(){$(this).css({left : $(this).width()}).animate({left:0,opacity:1})});
     $(this).children('h4').css({position : 'relative','color': '#fff'}).animate({left:$(this).width(),opacity:0},300,'linear',function(){$(this).css({left : -$(this).width()}).animate({left:0,opacity:1})});
     $(this).children('p').css({position : 'relative','color': '#fff'}).animate({left:$(this).width(),opacity:0},300,'linear',function(){$(this).css({left : -$(this).width()}).animate({left:0,opacity:1})});
 },function(){
     $(this).children('.img').css({position : 'relative'}).animate({left:-$(this).width(),opacity:0},200,'linear',function(){$(this).css({left : $(this).width()}).animate({left:0,opacity:1})});
     $(this).children('h4').css({position : 'relative','color': ''}).animate({left:$(this).width(),opacity:0},300,'linear',function(){$(this).css({left : -$(this).width()}).animate({left:0,opacity:1})});
     $(this).children('p').css({position : 'relative','color': ''}).animate({left:$(this).width(),opacity:0},300,'linear',function(){$(this).css({left : -$(this).width()}).animate({left:0,opacity:1})});
     $(this).css({overflow : 'hidden',position:'relative',background:''});
 })
 /*营销推广*/
 $('.D-troubleSubList li').hide();
 $('.D-troubleList li').mouseenter(function(){
     $(this).hide();
     $(this).siblings().show();
     $('.D-troubleSubList li').hide();
     $('.D-troubleSubList li').eq($(this).index()).show('200');
 })
 $('.D-caseList li').hover(function(){
     $(this).siblings().removeClass('cur');
     $(this).addClass('cur');
 },function(){
     $(this).removeClass('cur');
 })


