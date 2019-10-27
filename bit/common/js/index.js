$(function() {
	var banner = document.getElementById("three-banner");
	if (banner) {
		var SEPARATION = 130,
			AMOUNTX = 30,
			AMOUNTY = 30;
		var container;
		var camera, scene, renderer;
		var particles, particle, count = 0;
		var mouseX = 0,
			mouseY = -1000;
		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;
		var p = 0;
		var f = null;
		f = setInterval(function() {
			p++;
			p > AMOUNTY / 2 && clearInterval(f)
		}, 600);
		init();
		animate();

		function init() {
			container = document.createElement("div");
			banner.appendChild(container);
			container.style.width = $(window).width() + "px";
			container.style.height = $(window).height() + "px";
			width = $(window).width();
			height = $(window).height();
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
			camera.position.z = 1000;
			camera.position.z = 1000, camera.position.y = 1000, camera.position.x = 500, scene = new THREE.Scene();
			particles = new Array();
			var PI2 = Math.PI * 2;
			var material = new THREE.ParticleCanvasMaterial({
				color: "#04d6bf",
				transparent: !0,
				program: function(context) {
					context.beginPath();
					context.lineCap = "round";
					context.lineWidth = 0.5;
					context.moveTo(0, 0);
					context.lineTo(1, 0);
					context.moveTo(1, 0);
					context.lineTo(1, 2);
					context.moveTo(1, 2);
					context.lineTo(0, 2);
					context.moveTo(0, 2);
					context.lineTo(0, 0);
					context.closePath();
					context.stroke()
				}
			});
			var material2 = new THREE.ParticleCanvasMaterial({
				color: "#04d6bf",
				transparent: !0,
				program: function(context) {
					context.beginPath();
					context.lineCap = "round";
					context.lineWidth = 0.5;
					context.moveTo(0, -0.5);
					context.lineTo(0.5, 0);
					context.moveTo(0.5, 0);
					context.lineTo(0.5, -2);
					context.moveTo(0, -2);
					context.lineTo(1, -2);
					context.stroke()
				}
			});
			var i = 0;
			for (var ix = 0; ix < AMOUNTX; ix++) {
				for (var iy = 0; iy < AMOUNTY; iy++) {
					if (ix % 2 == 0) {
						particle = particles[i++] = new THREE.Particle(material)
					} else {
						particle = particles[i++] = new THREE.Particle(material2)
					}
					particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
					particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
					scene.add(particle);
					particle.material.opacity = 0.8
				}
			}
			renderer = new THREE.CanvasRenderer();
			renderer.setSize(width, height);
			container.appendChild(renderer.domElement);
			document.addEventListener("mousemove", onDocumentMouseMove, false);
			window.addEventListener("resize", onWindowResize, false)
		}
		function EllipseOne(context, x, y, a, b) {
			var step = (a > b) ? 1 / a : 1 / b;
			context.beginPath();
			context.moveTo(x + a, y);
			for (var i = 0; i < 2 * Math.PI; i += step) {
				context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i))
			}
			context.closePath();
			context.fill()
		}
		function onWindowResize() {
			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight)
		}
		function onDocumentMouseMove(event) {
			mouseX = event.clientX - windowHalfX;
			mouseY = event.clientY - windowHalfY
		}
		function onDocumentTouchStart(event) {
			if (event.touches.length === 1) {
				event.preventDefault();
				mouseX = event.touches[0].pageX - windowHalfX;
				mouseY = event.touches[0].pageY - windowHalfY
			}
		}
		function onDocumentTouchMove(event) {
			mouseX = event.clientX - window.innerWidth / 2;
			mouseY = event.clientY + 150
		}
		function animate() {
			requestAnimationFrame(animate);
			render()
		}
		function render() {
			camera.position.x += (mouseX - camera.position.x) * 0.01;
			camera.position.y += (mouseY - camera.position.y) * 0.005;
			if (camera.position.y < 350) {
				camera.position.y = 350
			}
			camera.lookAt(scene.position);
			var i = 0;
			for (var ix = 0; ix < AMOUNTX; ix++) {
				for (var iy = 0; iy < AMOUNTY; iy++) {
					var r = 0;
					particle = particles[i++];
					if (p < AMOUNTY / 2 && Math.abs(iy - AMOUNTY / 2) > p) {
						r = 0
					} else {
						particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
						particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) + (Math.sin((iy + count) * 0.5) + 1);
						r = Math.abs(camera.position.y) / 100;
						r < 0.5 ? r = 0.5 : r > 1 && (r = 1)
					}
				}
			}
			renderer.render(scene, camera);
			count += 0.04
		}
	}
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 30) {
			$(".bm-header").addClass("fixed");
			$(".bm-logo").attr("src","//img.alicdn.com/imgextra/i2/1105832541/TB2uG0fXpHzQeBjSZFOXXcM9FXa_!!1105832541.png")
		} else {
			$(".bm-header").removeClass("fixed");
			$(".bm-logo").attr("src","//img.alicdn.com/imgextra/i4/1105832541/TB2BP4fXpLzQeBjSZJiXXXesFXa_!!1105832541.png")
		}
	});

	function smoothScrollToTop() {
		var timeOut;
		var speed;
		speed = speed || ($(window).height() - $(window).scrollTop() - 35) / 9;
		if ($(window).scrollTop() < ($(window).height() - 60)) {
			window.scrollBy(0, 1 * speed);
			timeOut = setTimeout(smoothScrollToTop, 0)
		} else {
			clearTimeout(timeOut);
			speed = null
		}
	}
	function waphack(){
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
	waphack();

	$(".J-icon-continue").click(smoothScrollToTop);
	//数字万物
	$(document).scroll(function() {
		var h = $(window).height() / 2;
		if ($(document).scrollTop() > h) {
			$(".bm-creations .pic").addClass("active")
		}
	});
	var timer = null;
	$(".J-icon-viewasset").mouseover(function() {
		var $detItem = $(this).parents(".det-item");
		var index = $detItem.index();
		var $subline = $(".line .subline").eq(index);
		if (index != 1) {
			$(".J-assetItem").eq(1).animate({
				top: "0px"
			}, 300);
			$(".J-assetItem").eq(1).children(".det").css("z-index", 1).animate({
				opacity: 0
			}, 300);
			$(".J-assetItem").eq(1).children(".intro").css("z-index", 2).animate({
				opacity: 1
			}, 300);
			$(".J-assetLine .subline").eq(1).animate({
				opacity: 0
			}, 300)
		}
		$detItem.animate({
			top: "-20px",
		}, 300);
		$detItem.children(".det").css("z-index", 2).animate({
			opacity: 1
		}, 300);
		$detItem.children(".intro").css("z-index", 1).animate({
			opacity: 0
		}, 300);
		$subline.animate({
			opacity: 1
		}, 300)
	});
	$(".J-icon-viewasset").mouseleave(function() {
		var $detItem = $(this).parents(".det-item");
		var index = $detItem.index();
		var $subline = $(".line .subline").eq(index);
		setTimeout(function() {
			timer = function() {
				$detItem.animate({
					top: "0px"
				}, 300);
				$detItem.children(".det").css("z-index", 1).animate({
					opacity: 0
				}, 300);
				$detItem.children(".intro").css("z-index", 2).animate({
					opacity: 1
				}, 300);
				$subline.animate({
					opacity: 0
				}, 300)
			}
		}, 300)
	});
	$(".bm-asset .det").mouseover(function() {
		var $detItem = $(this).parents(".det-item");
		var index = $detItem.index();
		var $subline = $(".line .subline").eq(index);
		clearTimeout(timer)
	});
	$(".bm-asset .det").mouseleave(function() {
		var $detItem = $(this).parents(".det-item");
		var index = $detItem.index();
		var $subline = $(".line .subline").eq(index);
		$detItem.animate({
			top: "0px"
		}, 300);
		$detItem.children(".det").css("z-index", 1).animate({
			opacity: 0
		}, 300);
		$detItem.children(".intro").css("z-index", 2).animate({
			opacity: 1
		}, 300);
		$subline.animate({
			opacity: 0
		}, 300)
	});
	var planetIndex = 1;
	var planetInterval = null;

	function planetIntervalFun() {
		planetIndex = (planetIndex == 5) ? 0 : planetIndex;
		var planetLastIndex = ((planetIndex - 1) == -1) ? 4 : (planetIndex - 1);
		var $lastPlanet = $(".bm-apps .planet").eq(planetLastIndex);
		$lastPlanet.removeClass("active");
		var $planet = $(".bm-apps .planet").eq(planetIndex);
		$planet.addClass("active");
		planetIndex++
	}
	function clearplanetIntervalFun() {
		$(".bm-apps .planet").removeClass("active");
		clearInterval(planetInterval)
	}
	planetInterval = setInterval(planetIntervalFun, 6000);
	var planetTimer1 = planetTimer2 = planetTimer3 = planetTimer4 = planetTimer5 = null;
	$(".bm-apps .planet").mouseover(function() {
		var $this = $(this);
		var index = $(".bm-apps .planet").index($this);
		clearTimeout(planetTimer1);
		clearTimeout(planetTimer2);
		clearTimeout(planetTimer3);
		clearTimeout(planetTimer4);
		clearTimeout(planetTimer5);
		planetIndex = index + 1;
		$(".bm-apps .planet").removeClass("active");
		clearInterval(planetInterval);
		$this.addClass("active")
	});
	$(".bm-apps .planet").mouseleave(function() {
		var $this = $(this);
		var index = $(".bm-apps .planet").index($this);

		function timer12345() {
			planetInterval = setInterval(planetIntervalFun, 6000)
		}

		if (index == 0) {
			planetTimer1 = setTimeout(timer12345, 300)
		} else if (index == 1) {
			planetTimer2 = setTimeout(timer12345, 300)
		} else if (index == 2) {
			planetTimer3 = setTimeout(timer12345, 300)
		} else if (index == 3) {
			planetTimer4 = setTimeout(timer12345, 300)
		} else if (index == 4) {
			planetTimer5 = setTimeout(timer12345, 300)
		}
	});
});