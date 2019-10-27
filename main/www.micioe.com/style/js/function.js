function showUp(){
	$(".message_right_a").css("visibility","");
	var totalCount = $("#bannDiv").attr("count");
	var current = $("#bannDiv").find("[show='on']");
	var curNum = $(current).attr("part");
	var prv = totalCount;
	if(curNum!=1){
		prv = curNum*1-1;
	}
	changMessagePage(prv);
};
function showDown(){
	var totalCount = $("#bannDiv").attr("count");
	var current = $("#bannDiv").find("[show='on']");
	var curNum = $(current).attr("part");
	var next = 1;
	if(curNum!=totalCount){
		next = curNum*1+1;
	}
	changMessagePage(next);
};

function changMessagePage(page){
	var currentPage = $("#pointShow").find(".on").attr("page");
	if(page==currentPage){
		return;
	}else if(page>currentPage){
		$("#bannDiv").find("[show='on']").animate({left:"-1100px"},200).attr("show","off");
		$("#bannDiv").find("[part='"+page+"']").css("left","1100px").animate({left:"0px"},200).attr("show","on");
	}else if(page<currentPage){
		$("#bannDiv").find("[show='on']").animate({left:"1100px"},200).attr("show","off");
		$("#bannDiv").find("[part='"+page+"']").css("left","-1100px").animate({left:"0px"},200).attr("show","on");
	}
	$("#pointShow").find(".on").removeClass("on");
	$("#pointShow").find("a:eq("+(page-1)*1+")").addClass("on");
};