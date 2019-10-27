// JavaScript Document


/**
 * Created by George on 3/24/2015.
 */
var partnerIndex = 0;
$(function () {
	
	/*运动函数1*/
	



	function auto(){
	    
	        if(count==length){
		        count=0;     
		        dynamic.style.top=0;
	        };
	        if(count2==length2){
		        count2=0;
		        dynamic2.style.top=0;
	        };
	        count++;
	        count2++;
	        
	        move(dynamic,{top:-count*aNews_li[0].offsetHeight},{time:700});
	        move(dynamic2,{top:-count2*aNews_li_2[0].offsetHeight},{time:700});
	        //alert(count)
	};

	/*      
	var dynamic2=document.getElementById('demo2');      
	var aNews_li2=dynamic2.children;                 
	dynamic2.innerHTML+=dynamic2.innerHTML;          
	var h2=dynamic2.offsetHeight/2;                  
	var length2=aNews_li2.length/2;
	var count2=0;
	var timer22=null;


	function auto(){
	    
	        if(count2==length2){
	        count2=0;     
	        dynamic2.style.top=0;
	        };
	        count++;
	        
	        move(dynamic2,{top:-count*aNews_li2[0].offsetHeight},{time:700});
	        //alert(count)
	};

	*/




	/*运动函数2*/

	function getStyle(obj, name)
	{
	    return (obj.currentStyle)?(obj.currentStyle[name]):(getComputedStyle(obj, false)[name]);
	}
	function move(obj, json, options)
	{ 
	    options=options||{};
	    options.type=options.type||'buffer';
	    options.time=options.time||700;
	    
	    var count=parseInt(options.time/30);
	    var n=0;
	    
	    var start={};
	    var dis={};
	    
	    for(var name in json)
	    {
	        if(name=='opacity')
	        {
	            start[name]=Math.round(parseFloat(getStyle(obj, name))*100);
	        }
	        else
	        {
	            start[name]=parseInt(getStyle(obj, name));
	        }
	        dis[name]=json[name]-start[name];
	    }
	    
	    clearInterval(obj.timer);
	    obj.timer=setInterval(function (){
	        n++;
	        
	        for(var name in json)
	        {
	            switch(options.type)
	            {
	                case 'linear':      
	                    var cur=start[name]+dis[name]*n/count;
	                    break;
	                case 'buffer':      
	                    var a=1-n/count;
	                    var cur=start[name]+dis[name]*(1-a*a*a);
	                    break;
	                case 'ease-in':     
	                    var a=n/count;
	                    var cur=start[name]+dis[name]*(a*a*a);
	                    break;
	            }
	            
	            if(name=='opacity')
	            {
	                obj.style.filter='alpha(opacity:'+cur+')';
	                obj.style.opacity=cur/100;
	            }
	            else
	            {
	                obj.style[name]=cur+'px';
	            }
	        }
	        
	        if(n==count)
	        {
	            clearInterval(obj.timer);
	            options.end && options.end();
	        }
	    }, 30);

	};



    if (!$('html').hasClass('ie no-ie10')) {
        $('[data-ride="animated"]').addClass('appear');
        $('[data-ride="animated"]').on('appear', function () {
            var $el = $(this), $ani = ($el.data('animation') || 'fadeIn'), $delay;
            if (!$el.hasClass('animated')) {
                $delay = $el.data('delay') || 0;
                setTimeout(function () {
                    $el.removeClass('appear').addClass($ani + " animated");
                }, $delay);
            }
        });
    };
    function chart() {
        $('.chart').easyPieChart({
            barColor: '#69c',
            trackColor: '#fff',
            scaleColor: false,
            lineWidth: 6,
            trackWidth: 6,
            lineCap: 'butt',
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        }); 
    }

    function scrollChar(){
        var carouselTop =  $('.carousel-percent').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height(); 
        if(scroll+windowHeight >= carouselTop) {
            setTimeout(function(){
                chart(); 
            },500);
        }
    }
    
    $(window).bind('scroll',scrollChar);

  

    $('.solution-list li').hover(function () {
        var wrapper = $(this).find('div');
        wrapper.stop().transition({
            rotate3d: '0,1,0,90deg'
        }, function () {
//      	
            $(this).find('img').toggle();
            wrapper.stop().transition({
                rotate3d: '0,1,0,0deg'
            });
        });
    }, function () {
        var wrapper = $(this).find('div');
        wrapper.transition({
            rotate3d: '0,1,0,90deg'
        }, function () {
            $(this).find('img').toggle();
            wrapper.transition({
                rotate3d: '0,1,0,0deg'
            });
        });
    });

    setInterval(function () {
        var val = parseInt(Math.random()*23) ;
        $('.partner-list li').eq(val).transition({
            rotate3d: '0,1,0,90deg',
        }, function () {
            $(this).find('.partner-wrap').toggle();
            $(this).transition({
                rotate3d: '0,1,0,0deg',
            });
        });
    }, 2000);


  /*  $('.contact .nav li.a').click(function (e) {
    	alert("dsd");
        $(this).siblings('li').removeClass('current');
        $(this).addClass('current');
        carouselMap.trigger('owl.goTo', $(this).index());
    });*/
    
    $('.our-server a').hover(function () {
        $(this).css('z-index','23');
        $(this).find("img").stop().transition({
        	
            scale: 1.1//缩放的
        },'200', function(){
           $(this).siblings('.server1-detail').stop().show('400');
        });
    }, function () {
        $(this).css('z-index','22');
        $(this).stop().find("img").transition({
            scale: 1
        },'200', function(){
           $(this).siblings('.server1-detail').stop().hide('200');
        });
    });

   /*点击导航到相对应的位置*/
   $('.nav-list li').click(function(){
        var name = $(this).attr('name');
        var top = $("." + name).offset().top;
        //console.log(top);
        var speed = 1000;
        $("html,body").stop().animate({scrollTop : top -94}, speed);
        $(this).addClass('currLi').siblings('li').removeClass('currLi');
   });
    $('.footer .link_us').click(function(){
        var name = $(this).attr('name');
        var top = $("." + name).offset().top;
        //console.log(top);
        var speed = 1000;
        $("html,body").stop().animate({scrollTop : top -94}, speed);
        $(this).addClass('currLi').siblings('li').removeClass('currLi');
   });

    /* 合作伙伴hover事件 */
    $('.partner-list li').hover(function() {
        var _this = $(this).children('.partner-wrap'); 
        toggleShow (_this,0,200) ;
    }, function() {
        var _this = $(this).children('.partner-wrap'); 
        toggleShow (_this,100,200);
    });

    function toggleShow (_this, num, speed){
        var arr;
        for(var i=0 ; i<_this.length ; i++){
            if($(_this[i]).css('display') == 'block'){
                arr = $(_this[i]);
                arr.children('.partner-desc').stop().animate({'top': num+'%'},speed);
            }
        } 
    }


    /*chart hover事件*/
    $('.chart').hover(function(){
        $(this).children('.icon').stop().transition({
            scale : 1,
            opacity: 1
        });
    },function(){
        $(this).children('.icon').stop().transition({
            scale : 0,
            opacity : 0
        });
    })


    /*人才招聘切换*/
    var key = 0;
    setInterval(function () {
        if (key >= 6) {
            key = 0;
        }
        $('.recruitInfo .left').eq(key).transition({
            rotate3d: '0,1,0,90deg'
        }, function () {
            $(this).find('.toggle').toggle();
            $(this).transition({
                rotate3d: '0,1,0,0deg'
            }, function () {
                key++;
            });
        });
    }, 3000);
    /* 首页数字翻页 */
    $(window).bind('scroll',scrolltimer)

    function scrolltimer(){
        var carouselTop =  $('.count-list').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height(); 
        if(scroll+windowHeight >= carouselTop ) {
            setTimeout(function(){
                var timer = setInterval(function(){
                    autoPlay(num1,timer,'.num-1');
                } , 10);
                var timer2 = setInterval(function(){
                    autoPlay(num2,timer2,'.num-2');
                } , 10);
                var timer3 = setInterval(function(){
                    autoPlay(num3,timer3,'.num-3');
                } , 100);
                var timer4 = setInterval(function(){
                    autoPlay(num4,timer4,'.num-4');
                } , 50);
            },800);
//            console.log(2);
        };
    } 
    var num1 = parseInt($('.num-1').text());
    var num2 = parseInt($('.num-2').text());
    var num3 = parseInt($('.num-3').text());
    var num4 = parseInt($('.num-4').text());
    var num1Change = 0;
    var num2Change = 0;
    var num3Change = 0;
    var num4Change = 0;
    function autoPlay (num,setName,obj) {
        if(obj == '.num-1') {
            num1Change++;
            if(num1Change >= num){
                num1Change = num ;
                clearInterval(setName);
            }
            $(obj).text(num1Change);
        } 
        if(obj == '.num-2') {
            num2Change++;
            if(num2Change >= num){
                num2Change = num ;
                clearInterval(setName);
            }
            $(obj).text(num2Change);
        }
        if(obj == '.num-3') {
            num3Change++;
            if(num3Change >= num){
                num3Change = num ;
                clearInterval(setName);
            }
            $(obj).text(num3Change);
        }
        if(obj == '.num-4') {
            num4Change++;
            if(num4Change >= num){
                num4Change = num ;
                clearInterval(setName);
            }
            $(obj).text(num4Change);
        }
       
    }

    /* 案例展示 */
    $('.cl-a').hover(function(){  	
        $(this).children('.c-screen').fadeIn('400');
    },function(){
    	$(this).children('.c-screen').hide();
    });
  
     /* 案例展示--tab切换 */
    
    $('.case .nav li').click(function () {
	       $(this).siblings('li').removeClass('current');
	       $(this).addClass('current');
	       var index=$(this).index();
 	   var odiv = $(".carousel-list").find('.case-div');
 	   odiv.hide();
 	   $(".carousel-list .case-div").eq(index).show();
 });
    
    //首页的幻灯片
     $('.bxslider').bxSlider({
				  	"controls":false,
				  	auto:true
				  });
	  //案例展示
	   $('.carousel-game').bxSlider({
	  	controls:true,
	  	slideWidth: 224,
	    minSlides: 4,
	    maxSlides: 4,
	    slideMargin: 10,
	    pager:true,
	    infiniteLoop: false
	  });	
	  
	  
	  //页面跳转
	  /**
	   * 首页导航的切换
	   */
	  loadYeMian();
	  function  loadYeMian(){
		 var srcstr=	window.location;
		 srcstr =srcstr.toString();
		  
		  var num= srcstr.charAt(srcstr.length-1);
		  var name ="";
		  
		 if(num==1){
		 	name="indexba";
		 }else if(num==2){
		 	name="server";
		 }else if(num==3){
		 	name="solution";
		 }else if(num==4){
		 	name="case";
		 }else if(num==5){
		 	name="partner";
		 }else if(num==6){
		 	name="industry";
		 }
		 if(name.length>0){
	        var top = $("." + name).offset().top; 
	        var speed = 1000;
	        $("html,body").stop().animate({scrollTop : top -94}, speed);
	        $("#header .nav-list li[name="+name+"]").addClass('currLi').siblings('li').removeClass('currLi');
		 }
	     
      
	 };
    
});



;(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(root.jQuery);
  }

}(this, function($) {

  $.transit = {
    version: "0.9.12",

    // Map of $.css() keys to values for 'transitionProperty'.
    // See https://developer.mozilla.org/en/CSS/CSS_transitions#Properties_that_can_be_animated
    propertyMap: {
      marginLeft    : 'margin',
      marginRight   : 'margin',
      marginBottom  : 'margin',
      marginTop     : 'margin',
      paddingLeft   : 'padding',
      paddingRight  : 'padding',
      paddingBottom : 'padding',
      paddingTop    : 'padding'
    },

    // Will simply transition "instantly" if false
    enabled: true,

    // Set this to false if you don't want to use the transition end property.
    useTransitionEnd: false
  };

  var div = document.createElement('div');
  var support = {};

  // Helper function to get the proper vendor property name.
  // (`transition` => `WebkitTransition`)
  function getVendorPropertyName(prop) {
    // Handle unprefixed versions (FF16+, for example)
    if (prop in div.style) return prop;

    var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

    for (var i=0; i<prefixes.length; ++i) {
      var vendorProp = prefixes[i] + prop_;
      if (vendorProp in div.style) { return vendorProp; }
    }
  }

  // Helper function to check if transform3D is supported.
  // Should return true for Webkits and Firefox 10+.
  function checkTransform3dSupport() {
    div.style[support.transform] = '';
    div.style[support.transform] = 'rotateY(90deg)';
    return div.style[support.transform] !== '';
  }

  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  // Check for the browser's transitions support.
  support.transition      = getVendorPropertyName('transition');
  support.transitionDelay = getVendorPropertyName('transitionDelay');
  support.transform       = getVendorPropertyName('transform');
  support.transformOrigin = getVendorPropertyName('transformOrigin');
  support.filter          = getVendorPropertyName('Filter');
  support.transform3d     = checkTransform3dSupport();

  var eventNames = {
    'transition':       'transitionend',
    'MozTransition':    'transitionend',
    'OTransition':      'oTransitionEnd',
    'WebkitTransition': 'webkitTransitionEnd',
    'msTransition':     'MSTransitionEnd'
  };

  // Detect the 'transitionend' event needed.
  var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;

  // Populate jQuery's `$.support` with the vendor prefixes we know.
  // As per [jQuery's cssHooks documentation](http://api.jquery.com/jQuery.cssHooks/),
  // we set $.support.transition to a string of the actual property name used.
  for (var key in support) {
    if (support.hasOwnProperty(key) && typeof $.support[key] === 'undefined') {
      $.support[key] = support[key];
    }
  }

  // Avoid memory leak in IE.
  div = null;

  // ## $.cssEase
  // List of easing aliases that you can use with `$.fn.transition`.
  $.cssEase = {
    '_default':       'ease',
    'in':             'ease-in',
    'out':            'ease-out',
    'in-out':         'ease-in-out',
    'snap':           'cubic-bezier(0,1,.5,1)',
    // Penner equations
    'easeInCubic':    'cubic-bezier(.550,.055,.675,.190)',
    'easeOutCubic':   'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc':     'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc':    'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc':  'cubic-bezier(.785,.135,.15,.86)',
    'easeInExpo':     'cubic-bezier(.95,.05,.795,.035)',
    'easeOutExpo':    'cubic-bezier(.19,1,.22,1)',
    'easeInOutExpo':  'cubic-bezier(1,0,0,1)',
    'easeInQuad':     'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad':    'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad':  'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart':    'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart':   'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint':    'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint':   'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine':     'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine':    'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine':  'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack':     'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack':    'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack':  'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // ## 'transform' CSS hook
  // Allows you to use the `transform` property in CSS.
  //
  //     $("#hello").css({ transform: "rotate(90deg)" });
  //
  //     $("#hello").css('transform');
  //     //=> { rotate: '90deg' }
  //
  $.cssHooks['transit:transform'] = {
    // The getter returns a `Transform` object.
    get: function(elem) {
      return $(elem).data('transform') || new Transform();
    },

    // The setter accepts a `Transform` object or a string.
    set: function(elem, v) {
      var value = v;

      if (!(value instanceof Transform)) {
        value = new Transform(value);
      }

      // We've seen the 3D version of Scale() not work in Chrome when the
      // element being scaled extends outside of the viewport.  Thus, we're
      // forcing Chrome to not use the 3d transforms as well.  Not sure if
      // translate is affectede, but not risking it.  Detection code from
      // http://davidwalsh.name/detecting-google-chrome-javascript
      if (support.transform === 'WebkitTransform' && !isChrome) {
        elem.style[support.transform] = value.toString(true);
      } else {
        elem.style[support.transform] = value.toString();
      }

      $(elem).data('transform', value);
    }
  };

  // Add a CSS hook for `.css({ transform: '...' })`.
  // In jQuery 1.8+, this will intentionally override the default `transform`
  // CSS hook so it'll play well with Transit. (see issue #62)
  $.cssHooks.transform = {
    set: $.cssHooks['transit:transform'].set
  };

  // ## 'filter' CSS hook
  // Allows you to use the `filter` property in CSS.
  //
  //     $("#hello").css({ filter: 'blur(10px)' });
  //
  $.cssHooks.filter = {
    get: function(elem) {
      return elem.style[support.filter];
    },
    set: function(elem, value) {
      elem.style[support.filter] = value;
    }
  };

  // jQuery 1.8+ supports prefix-free transitions, so these polyfills will not
  // be necessary.
  if ($.fn.jquery < "1.8") {
    // ## 'transformOrigin' CSS hook
    // Allows the use for `transformOrigin` to define where scaling and rotation
    // is pivoted.
    //
    //     $("#hello").css({ transformOrigin: '0 0' });
    //
    $.cssHooks.transformOrigin = {
      get: function(elem) {
        return elem.style[support.transformOrigin];
      },
      set: function(elem, value) {
        elem.style[support.transformOrigin] = value;
      }
    };

    // ## 'transition' CSS hook
    // Allows you to use the `transition` property in CSS.
    //
    //     $("#hello").css({ transition: 'all 0 ease 0' });
    //
    $.cssHooks.transition = {
      get: function(elem) {
        return elem.style[support.transition];
      },
      set: function(elem, value) {
        elem.style[support.transition] = value;
      }
    };
  }

  // ## Other CSS hooks
  // Allows you to rotate, scale and translate.
  registerCssHook('scale');
  registerCssHook('scaleX');
  registerCssHook('scaleY');
  registerCssHook('translate');
  registerCssHook('rotate');
  registerCssHook('rotateX');
  registerCssHook('rotateY');
  registerCssHook('rotate3d');
  registerCssHook('perspective');
  registerCssHook('skewX');
  registerCssHook('skewY');
  registerCssHook('x', true);
  registerCssHook('y', true);

  // ## Transform class
  // This is the main class of a transformation property that powers
  // `$.fn.css({ transform: '...' })`.
  //
  // This is, in essence, a dictionary object with key/values as `-transform`
  // properties.
  //
  //     var t = new Transform("rotate(90) scale(4)");
  //
  //     t.rotate             //=> "90deg"
  //     t.scale              //=> "4,4"
  //
  // Setters are accounted for.
  //
  //     t.set('rotate', 4)
  //     t.rotate             //=> "4deg"
  //
  // Convert it to a CSS string using the `toString()` and `toString(true)` (for WebKit)
  // functions.
  //
  //     t.toString()         //=> "rotate(90deg) scale(4,4)"
  //     t.toString(true)     //=> "rotate(90deg) scale3d(4,4,0)" (WebKit version)
  //
  function Transform(str) {
    if (typeof str === 'string') { this.parse(str); }
    return this;
  }

  Transform.prototype = {
    // ### setFromString()
    // Sets a property from a string.
    //
    //     t.setFromString('scale', '2,4');
    //     // Same as set('scale', '2', '4');
    //
    setFromString: function(prop, val) {
      var args =
        (typeof val === 'string')  ? val.split(',') :
        (val.constructor === Array) ? val :
        [ val ];

      args.unshift(prop);

      Transform.prototype.set.apply(this, args);
    },

    // ### set()
    // Sets a property.
    //
    //     t.set('scale', 2, 4);
    //
    set: function(prop) {
      var args = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[prop]) {
        this.setter[prop].apply(this, args);
      } else {
        this[prop] = args.join(',');
      }
    },

    get: function(prop) {
      if (this.getter[prop]) {
        return this.getter[prop].apply(this);
      } else {
        return this[prop] || 0;
      }
    },

    setter: {
      // ### rotate
      //
      //     .css({ rotate: 30 })
      //     .css({ rotate: "30" })
      //     .css({ rotate: "30deg" })
      //     .css({ rotate: "30deg" })
      //
      rotate: function(theta) {
        this.rotate = unit(theta, 'deg');
      },

      rotateX: function(theta) {
        this.rotateX = unit(theta, 'deg');
      },

      rotateY: function(theta) {
        this.rotateY = unit(theta, 'deg');
      },

      // ### scale
      //
      //     .css({ scale: 9 })      //=> "scale(9,9)"
      //     .css({ scale: '3,2' })  //=> "scale(3,2)"
      //
      scale: function(x, y) {
        if (y === undefined) { y = x; }
        this.scale = x + "," + y;
      },

      // ### skewX + skewY
      skewX: function(x) {
        this.skewX = unit(x, 'deg');
      },

      skewY: function(y) {
        this.skewY = unit(y, 'deg');
      },

      // ### perspectvie
      perspective: function(dist) {
        this.perspective = unit(dist, 'px');
      },

      // ### x / y
      // Translations. Notice how this keeps the other value.
      //
      //     .css({ x: 4 })       //=> "translate(4px, 0)"
      //     .css({ y: 10 })      //=> "translate(4px, 10px)"
      //
      x: function(x) {
        this.set('translate', x, null);
      },

      y: function(y) {
        this.set('translate', null, y);
      },

      // ### translate
      // Notice how this keeps the other value.
      //
      //     .css({ translate: '2, 5' })    //=> "translate(2px, 5px)"
      //
      translate: function(x, y) {
        if (this._translateX === undefined) { this._translateX = 0; }
        if (this._translateY === undefined) { this._translateY = 0; }

        if (x !== null && x !== undefined) { this._translateX = unit(x, 'px'); }
        if (y !== null && y !== undefined) { this._translateY = unit(y, 'px'); }

        this.translate = this._translateX + "," + this._translateY;
      }
    },

    getter: {
      x: function() {
        return this._translateX || 0;
      },

      y: function() {
        return this._translateY || 0;
      },

      scale: function() {
        var s = (this.scale || "1,1").split(',');
        if (s[0]) { s[0] = parseFloat(s[0]); }
        if (s[1]) { s[1] = parseFloat(s[1]); }

        // "2.5,2.5" => 2.5
        // "2.5,1" => [2.5,1]
        return (s[0] === s[1]) ? s[0] : s;
      },

      rotate3d: function() {
        var s = (this.rotate3d || "0,0,0,0deg").split(',');
        for (var i=0; i<=3; ++i) {
          if (s[i]) { s[i] = parseFloat(s[i]); }
        }
        if (s[3]) { s[3] = unit(s[3], 'deg'); }

        return s;
      }
    },

    // ### parse()
    // Parses from a string. Called on constructor.
    parse: function(str) {
      var self = this;
      str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
        self.setFromString(prop, val);
      });
    },

    // ### toString()
    // Converts to a `transition` CSS property string. If `use3d` is given,
    // it converts to a `-webkit-transition` CSS property string instead.
    toString: function(use3d) {
      var re = [];

      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          // Don't use 3D transformations if the browser can't support it.
          if ((!support.transform3d) && (
            (i === 'rotateX') ||
            (i === 'rotateY') ||
            (i === 'perspective') ||
            (i === 'transformOrigin'))) { continue; }

          if (i[0] !== '_') {
            if (use3d && (i === 'scale')) {
              re.push(i + "3d(" + this[i] + ",1)");
            } else if (use3d && (i === 'translate')) {
              re.push(i + "3d(" + this[i] + ",0)");
            } else {
              re.push(i + "(" + this[i] + ")");
            }
          }
        }
      }

      return re.join(" ");
    }
  };

  function callOrQueue(self, queue, fn) {
    if (queue === true) {
      self.queue(fn);
    } else if (queue) {
      self.queue(queue, fn);
    } else {
      self.each(function () {
                fn.call(this);
            });
    }
  }

  // ### getProperties(dict)
  // Returns properties (for `transition-property`) for dictionary `props`. The
  // value of `props` is what you would expect in `$.css(...)`.
  function getProperties(props) {
    var re = [];

    $.each(props, function(key) {
      key = $.camelCase(key); // Convert "text-align" => "textAlign"
      key = $.transit.propertyMap[key] || $.cssProps[key] || key;
      key = uncamel(key); // Convert back to dasherized

      // Get vendor specify propertie
      if (support[key])
        key = uncamel(support[key]);

      if ($.inArray(key, re) === -1) { re.push(key); }
    });

    return re;
  }

  // ### getTransition()
  // Returns the transition string to be used for the `transition` CSS property.
  //
  // Example:
  //
  //     getTransition({ opacity: 1, rotate: 30 }, 500, 'ease');
  //     //=> 'opacity 500ms ease, -webkit-transform 500ms ease'
  //
  function getTransition(properties, duration, easing, delay) {
    // Get the CSS properties needed.
    var props = getProperties(properties);

    // Account for aliases (`in` => `ease-in`).
    if ($.cssEase[easing]) { easing = $.cssEase[easing]; }

    // Build the duration/easing/delay attributes for it.
    var attribs = '' + toMS(duration) + ' ' + easing;
    if (parseInt(delay, 10) > 0) { attribs += ' ' + toMS(delay); }

    // For more properties, add them this way:
    // "margin 200ms ease, padding 200ms ease, ..."
    var transitions = [];
    $.each(props, function(i, name) {
      transitions.push(name + ' ' + attribs);
    });

    return transitions.join(', ');
  }

  // ## $.fn.transition
  // Works like $.fn.animate(), but uses CSS transitions.
  //
  //     $("...").transition({ opacity: 0.1, scale: 0.3 });
  //
  //     // Specific duration
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500);
  //
  //     // With duration and easing
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');
  //
  //     // With callback
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, function() { ... });
  //
  //     // With everything
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() { ... });
  //
  //     // Alternate syntax
  //     $("...").transition({
  //       opacity: 0.1,
  //       duration: 200,
  //       delay: 40,
  //       easing: 'in',
  //       complete: function() { /* ... */ }
  //      });
  //
  $.fn.transition = $.fn.transit = function(properties, duration, easing, callback) {
    var self  = this;
    var delay = 0;
    var queue = true;

    var theseProperties = $.extend(true, {}, properties);

    // Account for `.transition(properties, callback)`.
    if (typeof duration === 'function') {
      callback = duration;
      duration = undefined;
    }

    // Account for `.transition(properties, options)`.
    if (typeof duration === 'object') {
      easing = duration.easing;
      delay = duration.delay || 0;
      queue = typeof duration.queue === "undefined" ? true : duration.queue;
      callback = duration.complete;
      duration = duration.duration;
    }

    // Account for `.transition(properties, duration, callback)`.
    if (typeof easing === 'function') {
      callback = easing;
      easing = undefined;
    }

    // Alternate syntax.
    if (typeof theseProperties.easing !== 'undefined') {
      easing = theseProperties.easing;
      delete theseProperties.easing;
    }

    if (typeof theseProperties.duration !== 'undefined') {
      duration = theseProperties.duration;
      delete theseProperties.duration;
    }

    if (typeof theseProperties.complete !== 'undefined') {
      callback = theseProperties.complete;
      delete theseProperties.complete;
    }

    if (typeof theseProperties.queue !== 'undefined') {
      queue = theseProperties.queue;
      delete theseProperties.queue;
    }

    if (typeof theseProperties.delay !== 'undefined') {
      delay = theseProperties.delay;
      delete theseProperties.delay;
    }

    // Set defaults. (`400` duration, `ease` easing)
    if (typeof duration === 'undefined') { duration = $.fx.speeds._default; }
    if (typeof easing === 'undefined')   { easing = $.cssEase._default; }

    duration = toMS(duration);

    // Build the `transition` property.
    var transitionValue = getTransition(theseProperties, duration, easing, delay);

    // Compute delay until callback.
    // If this becomes 0, don't bother setting the transition property.
    var work = $.transit.enabled && support.transition;
    var i = work ? (parseInt(duration, 10) + parseInt(delay, 10)) : 0;

    // If there's nothing to do...
    if (i === 0) {
      var fn = function(next) {
        self.css(theseProperties);
        if (callback) { callback.apply(self); }
        if (next) { next(); }
      };

      callOrQueue(self, queue, fn);
      return self;
    }

    // Save the old transitions of each element so we can restore it later.
    var oldTransitions = {};

    var run = function(nextCall) {
      var bound = false;

      // Prepare the callback.
      var cb = function() {
        if (bound) { self.unbind(transitionEnd, cb); }

        if (i > 0) {
          self.each(function() {
            this.style[support.transition] = (oldTransitions[this] || null);
          });
        }

        if (typeof callback === 'function') { callback.apply(self); }
        if (typeof nextCall === 'function') { nextCall(); }
      };

      if ((i > 0) && (transitionEnd) && ($.transit.useTransitionEnd)) {
        // Use the 'transitionend' event if it's available.
        bound = true;
        self.bind(transitionEnd, cb);
      } else {
        // Fallback to timers if the 'transitionend' event isn't supported.
        window.setTimeout(cb, i);
      }

      // Apply transitions.
      self.each(function() {
        if (i > 0) {
          this.style[support.transition] = transitionValue;
        }
        $(this).css(theseProperties);
      });
    };

    // Defer running. This allows the browser to paint any pending CSS it hasn't
    // painted yet before doing the transitions.
    var deferredRun = function(next) {
        this.offsetWidth; // force a repaint
        run(next);
    };

    // Use jQuery's fx queue.
    callOrQueue(self, queue, deferredRun);

    // Chainability.
    return this;
  };

  function registerCssHook(prop, isPixels) {
    // For certain properties, the 'px' should not be implied.
    if (!isPixels) { $.cssNumber[prop] = true; }

    $.transit.propertyMap[prop] = support.transform;

    $.cssHooks[prop] = {
      get: function(elem) {
        var t = $(elem).css('transit:transform');
        return t.get(prop);
      },

      set: function(elem, value) {
        var t = $(elem).css('transit:transform');
        t.setFromString(prop, value);

        $(elem).css({ 'transit:transform': t });
      }
    };

  }

  // ### uncamel(str)
  // Converts a camelcase string to a dasherized string.
  // (`marginLeft` => `margin-left`)
  function uncamel(str) {
    return str.replace(/([A-Z])/g, function(letter) { return '-' + letter.toLowerCase(); });
  }

  // ### unit(number, unit)
  // Ensures that number `number` has a unit. If no unit is found, assume the
  // default is `unit`.
  //
  //     unit(2, 'px')          //=> "2px"
  //     unit("30deg", 'rad')   //=> "30deg"
  //
  function unit(i, units) {
    if ((typeof i === "string") && (!i.match(/^[\-0-9\.]+$/))) {
      return i;
    } else {
      return "" + i + units;
    }
  }

  // ### toMS(duration)
  // Converts given `duration` to a millisecond string.
  //
  // toMS('fast') => $.fx.speeds[i] => "200ms"
  // toMS('normal') //=> $.fx.speeds._default => "400ms"
  // toMS(10) //=> '10ms'
  // toMS('100ms') //=> '100ms'  
  //
  function toMS(duration) {
    var i = duration;

    // Allow string durations like 'fast' and 'slow', without overriding numeric values.
    if (typeof i === 'string' && (!i.match(/^[\-0-9\.]+/))) { i = $.fx.speeds[i] || $.fx.speeds._default; }

    return unit(i, 'ms');
  }

  // Export some functions for testable-ness.
  $.transit.getTransitionValue = getTransition;

  return $;
}));




(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  }
  var $window = $(window);

  var $prior_appeared;

  function process() {
    check_lock = false;
    for (var index = 0; index < selectors.length; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);


      if ($prior_appeared) {
        var $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);
