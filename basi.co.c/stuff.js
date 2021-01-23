

$(".main").mouseenter(function(){
    $(window).bind('mousewheel', function(event) {
        var imgLeft; 
        
          if (event.originalEvent.wheelDelta >= 0) {
            imgLeft = parseInt($(".name").css('left')) + 1;
          }
          else {
            imgLeft = parseInt($(".name").css('left')) - 1;
          }

      $(".name").css('left', imgLeft+"px" );     
      event.preventDefault();
    });   
  });
  
  $(".main").mouseleave(function(){
     $(window).unbind("mousewheel"); 
  });

  
  

//   let ball = document.body.appendChild(document.createElement('div'));

// const ball = document.querySelector(".ball");
  
// //   Object.assign(ball.style, {
// //     // position: 'absolute',
// //     // background: '#3b3b3b',
// //     // width: '400px', height: '400px',
// //     // borderRadius: '50%' 
// // });
  
//   let x = -100;
//   let y = window.innerHeight / 5;
//   let vx = 3;
//   let vy = -3;
//   let grav = .3;
//   var decay = 0.5;
  
//   function loop() {
//     let floor = window.innerHeight - 399;
//     x += vx;
//     y += vy;
  
//     vy += grav;
//     if (y > floor) {
//       vy *= -decay;
//       vx *= decay;
//       y = floor;
//     }
  
//     ball.transform = `translate(${x}px, ${y}px)`;
//     window.requestAnimationFrame(loop);
//   }
//   loop();