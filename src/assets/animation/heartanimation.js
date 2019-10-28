function myTest() {
  container = document.getElementById( 'canvas-container' );
  //canvas = document.createElement( 'canvas' );
	var canvas = document.querySelector("#scene"),
  ctx = canvas.getContext("2d"),
  particles = [],
  amount = 0,
  mouse = {x:0,y:0},
  radius = 0.5;

var ww = canvas.width ;
var wh = canvas.height ;

function Particle(x,y){
  this.x =  Math.random()*ww;
  this.y =  Math.random()*wh;
  this.dest = {
    x : x,
    y: y
  };
  this.r =  Math.random()*1 +.5;
  this.vx = (Math.random()-0.5)*20;
  this.vy = (Math.random()-0.5)*20;
  this.accX = 0;
  this.accY = 1;
  this.friction = Math.random()*0.05 + 0.93;
  this.color = "white";
}

Particle.prototype.render = function() {


  this.accX = (this.dest.x - this.x)/100;
  this.accY = (this.dest.y - this.y)/100;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y +=  this.vy;

  ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();

  var a = this.x - mouse.x;
  var b = this.y - mouse.y;

  var distance = Math.sqrt( a*a + b*b );
  if(distance<(radius*70)){
    this.accX = (this.x - mouse.x)/100;
    this.accY = (this.y - mouse.y)/100;
    this.vx += this.accX;
    this.vy += this.accY;
  }

}

function onMouseMove(e){
  bounds = container.getBoundingClientRect();
  mouse.x = e.clientX - bounds.left;
  mouse.y = e.clientY - bounds.top;
}

function onTouchMove(e){
  if(e.touches.length > 0 ){
    bounds = container.getBoundingClientRect();
    mouse.x = e.touches[0].clientX -bounds.left;
    mouse.y = e.touches[0].clientY-bounds.top;
  }
}

function onTouchEnd(e){
mouse.x = -9999;
mouse.y = -9999;
}

function initScene(){
  ww = canvas.width = window.innerWidth ;
  wh = canvas.height = window.innerHeight ;

  ctx.clearRect(0, 0, 900, 500);
    
  
  ctx.beginPath();
  var d = (window.innerWidth*37/100 > 400)?(window.innerWidth*37/100):300;
 

  var k = 80;
  ctx.moveTo(k, k + d / 5);
  ctx.quadraticCurveTo(k, k, k + d / 4, k);
  ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
  ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
  ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
  ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
  ctx.lineTo(k + d / 2, k + d);
  ctx.lineTo(k + d / 4, k + d * 3/4);
  ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
  ctx.stroke();
  ctx.fill();

  var data  = ctx.getImageData(0, 0, ww, wh).data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";

  particles = [];
  for(var i=0;i<ww;i+=Math.round(ww/100)){
    for(var j=0;j<wh;j+=Math.round(ww/100)){
      if(data[ ((i + j*ww)*4) + 3] > 100){
        particles.push(new Particle(i,j));
      }
    }
  }
  amount = particles.length;

}

function onMouseClick(e){
  radius;
  if(radius ===2){
    radius = 0;
  }
}

function render(a) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(render);
  
  for (var i = 0; i < amount; i++) {
    particles[i].render();
  }
};

//copy.addEventListener("keyup", initScene);
 window.addEventListener("resize", initScene);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("click", onMouseClick);
window.addEventListener("touchend", onTouchEnd);
initScene();
requestAnimationFrame(render);
}
