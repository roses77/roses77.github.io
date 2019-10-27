$(function(){
	'user strict'
	var banner = document.getElementById('three-banner');
	if( banner){


		var SEPARATION = 130, AMOUNTX = 30, AMOUNTY = 30;
		var container;
		var camera, scene, renderer;
		var particles, particle, count = 0;
		var mouseX = 0, mouseY = -1000;

		var windowHalfX = window.innerWidth/2;	//window.innerWidth / 2;
		var windowHalfY = window.innerHeight/2;	//window.innerHeight / 2;

		var p = 0;
		var f = null;
		f = setInterval(function() {
			p++;
			p > AMOUNTY / 2 && clearInterval(f);
		}, 600);

		init();
		animate();



		function init() {

			container = document.createElement( 'div' );
			banner.appendChild( container );
			container.style.width = $(window).width() + 'px';
			container.style.height= $(window).height() + 'px';

			width = $(window).width();
	        height = $(window).height();

			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e4);
			camera.position.z = 1000;
			camera.position.z = 1e3,
	        camera.position.y = 1e3,
	        camera.position.x = 500,
	        //h = new t.Scene,

			scene = new THREE.Scene();

			particles = new Array();

			var PI2 = Math.PI * 2;
			var material = new THREE.ParticleCanvasMaterial({

				//color: '#04d6bf',
				// program: function ( context ) {

				// 	context.beginPath();
				// 	context.arc( 0, 0, 1, 0, PI2, true );
				// 	context.fill();
				// }

				color: '#04d6bf',
	            transparent: !0,
	            program: function(context) {
	            	//var r = .5;
	            	// context.beginPath();
	            	// context.arc( 0, 0, 0.5, 0, PI2, true );
	            	// context.fill();

	                // context.moveTo(0, r),
	                // context.lineTo(Math.cos(60 * Math.PI / 360) * r, Math.sin(60 * Math.PI / 360) * r),
	                // context.lineTo(Math.cos(60 * Math.PI / 360) * r, -Math.sin(60 * Math.PI / 360) * r),
	                // context.lineTo(0, -r),
	                // context.lineTo( - Math.cos(60 * Math.PI / 360) * r, -Math.sin(60 * Math.PI / 360) * r),
	                // context.lineTo( - Math.cos(60 * Math.PI / 360) * r, Math.sin(60 * Math.PI / 360) * r),
	                // context.closePath(),

	                // var image = document.getElementById('asdftgy');
	                // context.drawImage(image,0,0); //在(0,0)处绘制图片

	                // EllipseOne(context, 0, 0, 4, 8);

	                // 4*6
	                // context.beginPath();
	                // context.lineCap="round";
	                // context.moveTo(1, 0);
	                // context.lineTo(3, 0);
	                // context.lineTo(4, 1);
	                // context.lineTo(4, 5);
	                // context.lineTo(3, 6);
	                // context.lineTo(1, 6);
	                // context.lineTo(0, 5);
	                // context.lineTo(0, 1);
	                // context.closePath();
	                // context.stroke();

	                // 3*5
	                context.beginPath();
	                context.lineCap="round";
	                context.lineWidth=0.5;

	                context.moveTo(0, 0);
	                context.lineTo(1, 0);

	                context.moveTo(1, 0);
	                context.lineTo(1, 2);

	                context.moveTo(1, 2);
	                context.lineTo(0, 2);

	                context.moveTo(0, 2);
	                context.lineTo(0, 0);
	                context.closePath();

	                context.stroke();

	                
	            }
			});

			var material2 = new THREE.ParticleCanvasMaterial({

				//color: '#04d6bf',
				// program: function ( context ) {

				// 	context.beginPath();
				// 	context.arc( 0, 0, 1, 0, PI2, true );
				// 	context.fill();
				// }

				color: '#04d6bf',
	            transparent: !0,
	            program: function(context) {

	            	//4*6
	            	// context.beginPath();
	            	// context.lineCap="round";
	             //    context.moveTo(0, -2);
	             //    context.lineTo(2, 0);
	             //    context.lineTo(2, -6);
	             //    context.moveTo(0, -6);
	             //    context.lineTo(4, -6);
	             //    context.stroke();

	                //3*5
	            	context.beginPath();
	            	context.lineCap="round";
	            	context.lineWidth=0.5;

	                context.moveTo(0, -0.5);
	                context.lineTo(0.5, 0);
	                context.moveTo(0.5, 0);
	                context.lineTo(0.5, -2);
	                context.moveTo(0, -2);
	                context.lineTo(1, -2);
	                context.stroke();
	            }
			});

			var i = 0;

			for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
				for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
					if(ix %2 == 0){
						particle = particles[ i ++ ] = new THREE.Particle( material );
					}else{
						particle = particles[ i ++ ] = new THREE.Particle( material2 );
					}
					
					particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
					particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
					scene.add( particle );
					particle.material.opacity = .8;
				}
			}

			renderer = new THREE.CanvasRenderer();
			renderer.setSize( width, height );
			container.appendChild( renderer.domElement );
			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
			// document.addEventListener( 'touchmove', onDocumentTouchMove, false );
			window.addEventListener( 'resize', onWindowResize, false );

		}

		function EllipseOne(context, x, y, a, b) {
		    var step = (a > b) ? 1 / a : 1 / b;
		    context.beginPath();
		    context.moveTo(x + a, y);
		    for(var i = 0; i < 2 * Math.PI; i += step) {
		        context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
		    }
		    context.closePath();
		    context.fill();
		}

		function onWindowResize() {

			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize( window.innerWidth, window.innerHeight );


			

		}

		//

		function onDocumentMouseMove( event ) {

			mouseX = event.clientX - windowHalfX;
			mouseY = event.clientY - windowHalfY;

		}

		function onDocumentTouchStart( event ) {

			if ( event.touches.length === 1 ) {

				event.preventDefault();

				mouseX = event.touches[ 0 ].pageX - windowHalfX;
				mouseY = event.touches[ 0 ].pageY - windowHalfY;

			}

		}

		function onDocumentTouchMove( event ) {

			// if ( event.touches.length === 1 ) {

			// 	event.preventDefault();

				// mouseX = event.touches[ 0 ].pageX - windowHalfX;
				// mouseY = event.touches[ 0 ].pageY - windowHalfY;

				mouseX = event.clientX - window.innerWidth / 2;
				mouseY = event.clientY +150;

			// }

		}
		function animate() {

			requestAnimationFrame( animate );

			render();
		}

		function render() {

			camera.position.x += ( mouseX - camera.position.x ) * .01;
			camera.position.y += ( mouseY - camera.position.y ) * .005;

			if(camera.position.y < 350) camera.position.y = 350;
			camera.lookAt( scene.position );

			// if(camera.position.y <)

			var i = 0;
			for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
				for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
					var r = 0;
					particle = particles[ i++ ];
					if(p < AMOUNTY / 2 && Math.abs(iy - AMOUNTY / 2) > p ){
						r = 0;
					}else{
						particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) + ( Math.sin( ( iy + count ) * 0.5 ) + 1 );	
						r = Math.abs(camera.position.y) / 100;
	                	r < .5 ? r = .5 : r > 1 && (r = 1);
	                	//if(particle.position.y < 150) particle.position.y = 150;
					}
					

				}
			}
			renderer.render( scene, camera );
			count += 0.04;

			// for (var e = 0, t = 0; u > t; t++)
			// 	for (var i = 0; d > i; i++) {
	  //               var r = void 0;
	  //               v = y[e++],
	  //               p < d / 2 && Math.abs(i - d / 2) > p ? r = 0 : (
	  //               	v.position.y = 50 * Math.sin(.3 * (t + w)) + 50 * Math.sin(.5 * (i + w)),
	  //               	v.scale.x = v.scale.y = 4 * (Math.sin(.3 * (t + w)) + 1) + 4 * (Math.sin(.5 * (i + w)) + 1),
	  //               	r = Math.abs(v.position.y) / 100,
	  //               	r < .5 ? r = .5 : r > 1 && (r = 1)
	  //               ),
	                
	  //               v.material.opacity = r
	  //           }
	  //       m.render(h, g),
	  //       w += .04

		}
	}
	;
});