// basic styles

// $("html").mouseenter(function(){
//     $(window).bind('mousewheel', function(event) {
//         var imgLeft; 
        
//           if (event.originalEvent.wheelDelta >= 0) {
//             imgLeft = parseInt($(".topnav-centered").css('left')) + 1;
//           }
//           else {
//             imgLeft = parseInt($(".topnav-centered").css('left')) - 1;
//           }

//       $(".topnav-centered").css('left', imgLeft+"px" );     
//       event.preventDefault();
//     });   
//   });
  
//   $("html").mouseleave(function(){
//      $(window).unbind("mousewheel"); 
//   });





// ball styles
// let ball = document.body.appendChild(document.createElement('div'));
// Object.assign(ball.style, {
//   position: 'absolute',
//   background: 'rgb(47,47,47)', 
//   width: '20px', height: '20px', 
//   borderRadius: '50%'
// });

// let x = -100;
// let y = window.innerHeight / 5;
// let vx = 3;
// let vy = -3;
// let grav = .3;
// var decay = 0.5;

// function loop() {
//   let floor = window.innerHeight - 420;
//   x += vx;
//   y += vy;
  
//   vy += grav;
//   if (y > floor) {
//     vy *= -decay;
//     vx *= decay;
//     y = floor;
//   }
  
//   ball.style.transform = `translate(${x}px, ${y}px)`;
//   window.requestAnimationFrame(loop);
// }
// loop();


$(document).ready(function(){
  $(".me").click(function(){
    $("about_me/index.html").slideUp();
  });
  // $(".btn2").click(function(){
  //   $("p").slideDown();
  // });
});


/* Linear gradient------------------------------------------  */
$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #deffe5, rgb(255,255,255))');
});


/* Blur------------------------------------------  */
$(document).ready(function(){
  $('.vertical-menu a').hover(function(){
      $(this).addClass('blur');
  }).mouseout(function(){
      $(this).removeClass('blur');
  });
});

$(document).ready(function(){
  $('.navbarbottom a').hover(function(){
      $(this).addClass('blur');
  }).mouseout(function(){
      $(this).removeClass('blur');
  });
});

