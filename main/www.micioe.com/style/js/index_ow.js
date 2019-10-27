/** 延时加载  **/
var DoScObj = {
    ele:[],
    _ele:[],
    pan:null,
    off:200,
    timer:null,
    add:function(n,fn){
        n.each(function(){
            DoScObj.ele.push($(this));
            $(this).data("dso",fn);
        });
    },
    die:function(){
        this.pan.off("scroll.dso");
        $(window).off("resize.dso");
    },
    dos: function(a){
        if(this.pan.scrollTop()+this.pan.height()+this.off > a.offset().top){
            return true;
        }
    },
    run: function(){
        this.pan = !this.pan ? $(window) : this.pan;

        this.pan.on("scroll.dso",function(){
            clearTimeout(DoScObj.timer);
            DoScObj.timer = setTimeout(function(){
                if(DoScObj.ele.length<1){
                    DoScObj.die();
                }

                $.each(DoScObj.ele,function(inx,ele){
                    var th = $(this);
                    if(DoScObj.dos(th)){
                        if(th.data("dso")){
                            th.data("dso")();
                            th.data("dso",false);
                        }
                        if(th.attr("relsrc")){
                            th.attr("src",th.attr("relsrc"));
                            th.removeAttr("relsrc");
                        }
                    }else{
                        DoScObj._ele.push(ele);
                    }
                });
                DoScObj.ele=DoScObj._ele;
                DoScObj._ele=[];
            },100);
        }).trigger("scroll.dso");

        $(window).on({
            "resize.dso": function(){
                DoScObj.pan.trigger("scroll.dso");
            }
        });
    }
};

(function(d){
    DoScObj.add($(".lazy_img"));
    DoScObj.run();
})(document);


var tab = {
    ele: $(".banner li"),
    timer:null,
    inx:0,
    run: true,
    show: function(i){
        this.inx = i;
        this.ele.fadeOut().eq(i).fadeIn();
        $(".bannerCircle").find("a").removeClass("on").eq(i).addClass("on");
    },
    auto: function(){
        if(!this.run){
            return false;
        }

        this.timer = setTimeout(function(){
            tab.inx++;
            if(tab.inx>=tab.len){
                tab.inx = 0;
            }
            tab.show(tab.inx);
            tab.auto();
        },5000);
    },
    pre:function(){
        this.inx--;
        if(this.inx<0){
            this.inx = tab.len-1;
        }
        this.show(tab.inx);
    },
    next:function(){
        this.inx++;
        if(this.inx>=tab.len){
            this.inx = 0;
        }
        this.show(tab.inx);
    },
    start: function(){
        this.run = true;
        this.auto();
    },
    stop: function(){
        this.run = false;
        clearTimeout(this.timer);
    },
    init: function(){
        this.len = this.ele.length;
        /*if(this.len==1){
         $('.btnArrow,.bannerCircle').hide();
         }else{
         var s='';
         for(var i=0;i<this.len;i++){
         if(i==0){
         s+="<a class='on'></a>";
         }else{
         s+="<a></a>";
         }
         }
         $('.bannerCircle').html(s);
         $('.btnArrow,.bannerCircle').show();
         }*/
        this.auto();
    }
};

tab.init();
$(".bannerCircle").find("a").on({
    "click": function(){
        tab.show($(".bannerCircle").find("a").index($(this)));
        return false;
    },
    "mouseenter": function(){
        tab.stop();
    },
    "mouseleave": function(){
        tab.start();
    }
});
$(".btnL").on({
    "click": function(){
        tab.pre();
        return false;
    }

});
$(".btnR").on({
    "click": function(){
        tab.next();
        return false;
    }
});
$(".banner").on({
    "mouseenter": function(){
        tab.stop();
    },
    "mouseleave": function(){
        tab.start();
    }
});

$('.gameModCon li').hover(function(){
    var the=$(this);
    the.css('position','relative');//针对ie7 兼容;
    var pop= the.find('.pop');
    var parH=$('.gameModCon').height()+240;
    var t=the.position().top;
    var l=the.position().left;
    var popH=pop.height()+44;
    var popW=pop.width();
    if(parH<t+popH){
        pop.css({'top':-pop.height()/2+44,'left':'125px'});
    }
    if(l+popW>1000){
        pop.css({'left':'auto','right':'140px'});
    }
    pop.show();
},function(){
    var the=$(this);
    the.removeAttr('style');//针对ie7 兼容;
    $(this).find('.pop').hide();
})