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
let ball = document.body.appendChild(document.createElement('div'));
Object.assign(ball.style, {
  position: 'absolute',
  background: 'rgb(47,47,47)', 
  width: '40px', height: '40px', 
  borderRadius: '50%'
});

let x = -100;
let y = window.innerHeight / 5;
let vx = 3;
let vy = -3;
let grav = .3;
var decay = 0.5;

function loop() {
  let floor = window.innerHeight - 420;
  x += vx;
  y += vy;
  
  vy += grav;
  if (y > floor) {
    vy *= -decay;
    vx *= decay;
    y = floor;
  }
  
  ball.style.transform = `translate(${x}px, ${y}px)`;
  window.requestAnimationFrame(loop);
}
loop();



