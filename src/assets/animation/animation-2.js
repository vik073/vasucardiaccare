// Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

var init = function(){
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;
  
  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 2 : 2,
    ptlSize: isMobile || isSmall ? 2:3,
    width: 2e9,
    height: 3e9,
    mouseForce: 100,
    monochrome: true ,
    ttl :20,
    
    arrowPadding: 5,
    
  });
    
  // var gui = new dat.GUI();
  // gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
  //   ps.init(true);
  // });
  // gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
  //   ps.init(true);
  // });
  // gui.add(ps, 'restless');
  // gui.addColor(ps, 'color').onChange(function(value){
  //   ps.monochrome = true;
  //   ps.setColor(value);
	//   ps.init(true);
  // });
  
  
  // (window.addEventListener
  //  ? window.addEventListener('click', function(){ps.init(true)}, false)
  //  : window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
    // '<script type="text/javascript"> //function </script>'
  psScript.src = 'https://drive.google.com/uc?export=view&id=1scmW6Kx7CqrZdYr0ctGr7TL9oMtlCRXA';
  psScript.setAttribute('type', 'text/javascript');
  
  document.body.appendChild(psScript);
}
    
(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);
