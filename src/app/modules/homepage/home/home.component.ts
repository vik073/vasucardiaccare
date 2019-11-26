import { Component, OnInit } from '@angular/core';
  import * as PIXI from 'pixi.js';
  import * as gsap  from 'gsap';
  import { PixiPlugin } from "gsap/PixiPlugin";
  PixiPlugin.registerPIXI(PIXI);
declare const myTest: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  Application = PIXI.Application;
  loader = PIXI.loader;
  resources = PIXI.loader.resources;
  Sprite = PIXI.Sprite;
  slidesContainer = new PIXI.Container();


  AnimatedCard = true;
  ServiceCard = false;
  constructor() { }

  ngOnInit() {
    // myTest();

      
  
    var bgs = [];
    var texture_bg = [];
    var containers = [];
    var channelsContainer = [];
    var displacementFilters = [];
    var displacementSprites = [];
  
    var redChannelFilter: any;
    var greenChannelFilter: any;
    var blueChannelFilter: any ;
     var containerRed : any;
     var containerGreen: any;
     var containerBlue: any;
  
     var ghostEl = {
    x: 0,
    y: 0,
  };
  
  var posx = 0;
  var  posy = 0;
  var node_xp = 0;
  var  node_yp = 0;
  
  var rafId_gestureMove: any;
  var rafId_transition: any;
  var baseTimeline: any;
  
  // slide index
  var currentIndex : any= 0;
  
  var isPlaying:any = false;
  
  // autoplay
  var interval:any;
  var autoplay:any;
   var texture: any;
  
    
      // instanciate slider
      var options = ({
            
        stageWidth: 1220,
        stageHeight: 880,
        displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
        fullScreen: true,
        transitionDuration: 0.2, // must be 0.1 > transitionGhostDuration
        transitionGhostDuration : 0.25,
        transitionFilterIntensity: 350,
        transitionSpriteIntensity: 1,
        mouseDispIntensity: 20,
        interactive : true,
        autoPlay : true,
        autoPlaySpeed : 5000,
      });
  
  var data = document.getElementById("rbgShiftSlider");
      //Create a Pixi Application
  let app = new this.Application({width: 1256, 
     transparent: true , 
     stageWidth: 1220,
     
    stageHeight: 880,
    displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
    fullScreen: true,
     antialias: true, 
     webkitTransform: 'translate( -50%, -50% ) scale(1.2)',
     transform :'translate( -50%, -50% ) scale(1.2)',
      resolution: 1 });
  // app.renderer.view.style.position = "absolute";
  app.renderer.view.style.zIndex = 0;
  app.renderer.view.style.display = "block";
  app.renderer.view.style.width = '100%';

  // app.renderer.view.style.top = '321%';
  // app.renderer.view.style.left = '50%';
  
  
  //Add the canvas that Pixi automatically created for you to the HTML document
  data.appendChild(app.view);
  app.stage.addChild(this.slidesContainer);
  // let texture = PIXI.utils.TextureCache["http://hmongouachon.com/_demos/rgbShiftSlider/01-portrait-large.jpg"];
  // let sprite = new PIXI.Sprite(texture);
      // this.loader.add("../../assets/images/Image2.jpg")
      
      // .on("progress", loadProgressHandler)
      // .load(setup);
  
    // function loadProgressHandler() {
    //   console.log("loading"); 
    // }
  // function setup() {
  //   let cat =  new PIXI.Sprite(
  //     PIXI.loader.resources["../../assets/images/Image2.jpg"].texture
  //   )
  //     //Change the sprite's position
  //     cat.x = 10;
  //     cat.y = 10;
  //     cat.width = 100;
  //     cat.height= 70;
    
  //     //Add the cat to the stage so you can see it
  //     app.stage.addChild(cat);
      
  // }
  // var t1 = new gsap.TimelineLite();
  //     t1.to(app.stage, 1, {rotation: 27, x: 100, duration: 1});
  
  app.ticker.add(()=>{
  
    app.renderer.render(app.stage)
  });
  
  this.slidesContainer.interactive = true;
  build_RGBcontainers(this.slidesContainer);
  next_slide(0,this.slidesContainer)
   ///////////////////////////////    
    
            //  Build rgb containers
  
            ///////////////////////////////
   function build_RGBcontainers(slidesContainer) {
  
    
              redChannelFilter = new PIXI.filters.ColorMatrixFilter();
              redChannelFilter.matrix = [
                  1, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 1, 0
              ];
  
              greenChannelFilter = new PIXI.filters.ColorMatrixFilter();
              greenChannelFilter.matrix = [
                  0, 0, 0, 0, 0,
                  0, 1, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 0, 1, 0
              ];
  
              blueChannelFilter = new PIXI.filters.ColorMatrixFilter();
              blueChannelFilter.matrix = [
                  0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0,
                  0, 0, 1, 0, 0,
                  0, 0, 0, 1, 0
              ];
  
              channelsContainer.push(redChannelFilter, greenChannelFilter, blueChannelFilter);
  
              // CONTAINERS 
            containerRed = new PIXI.Container();
              containerRed.position.x = 0;
              containerGreen = new PIXI.Container();
            containerGreen.position.x = 0;
              containerBlue = new PIXI.Container();
              containerBlue.position.x = 0;
  
              containers.push(containerRed, containerGreen, containerBlue);
  
              // set texture for each background (used later for slide transition)
              for (var i = 0; i < 1; ++i) {
                  texture_bg[i] = new PIXI.Texture.fromImage('../../assets/images/Image2.jpg');
              }
  
              // set displacement filter and displacement sprite for each container
              for (var i = 0, len = containers.length; i < len; i++) {
  
                slidesContainer.addChild(containers[i]);
                  texture = new PIXI.Texture.fromImage('../../assets/displace-circle.png');
  
                  // push sprites & filters to array
                  displacementSprites.push(new PIXI.Sprite(texture));
                  displacementFilters.push(new PIXI.filters.DisplacementFilter(displacementSprites[i]));
  
                  // set first image texture background and push to array
                  var bg = new PIXI.Sprite(texture_bg[0]); //new PIXI.Sprite(texture2);
                  bgs.push(bg);
                  bgs[i].width = app.renderer.view.width;
                  bgs[i].height = app.renderer.view.height;
                  bgs[i].anchor.set(0.5)
                  bgs[i].x = app.renderer.view.width / 2;
                  bgs[i].y = app.renderer.view.height / 2;
                  bgs[i].alpha = 0;
  
                  // add bg array + displacement sprites array to container 
                  containers[i].addChild(displacementSprites[i], bgs[i]);
  
                  // addchannel container filter array + displacement filter array to container 
                  containers[i].filters = [displacementFilters[i], channelsContainer[i]];
  
                  // init x y value 
                  displacementFilters[i].scale.x = 0;
                  displacementFilters[i].scale.y = 0;
  
                  // set autofit
                  displacementFilters[i].autoFit = true;
  
              }
  
              // add different anchor value to each displacementSprite
              displacementSprites[0].anchor.set(0.25);
              displacementSprites[1].anchor.set(0.25);
              displacementSprites[2].anchor.set(0.25);
  
              // add blend mode
              // containers[0].filters[1].blendMode = PIXI.BLEND_MODES.ADD;
              containers[1].filters[1].blendMode = PIXI.BLEND_MODES.ADD;
              containers[2].filters[1].blendMode = PIXI.BLEND_MODES.ADD;
  
          }
  
   function next_slide(next: number , slidesContainer: any  ) {
  
            // init ghost x value
            gsap.TweenMax.set(ghostEl, {
                x: 0,
                ease: 0,
        
  
            });
      
            // init basetimeline
            baseTimeline = new gsap.TimelineMax({
                onStart: function() {
  
                    isPlaying = true;
  
                    // fake user gesture from left to right
                    gsap.TweenMax
                        .to(ghostEl, options.transitionDuration , {
                            x: screen.width,
                            ease: gsap.Power0.easeOut,
                        })
                },
  
                onComplete: function() {
  
                    // update current index
                    currentIndex = next;
  
                    isPlaying = false;
  
                    if (options.interactive === true) {
                        // init mouse gesture
                        gestureEffect( slidesContainer , rafId_transition);
                    }
                },
  
                onUpdate: function() {
                    // make transition displacement effect
                    node_xp += ((ghostEl.x - node_xp) / 3);
                    node_yp += ((ghostEl.x - node_yp) / 3);
  
                    for (var i = 0, len = containers.length; i < len; i++) {
                        displacementFilters[i].scale.x = Math.atan(node_xp - (displacementSprites[i].x)) * (baseTimeline.progress() * options.transitionFilterIntensity);
                        displacementSprites[i].position.x = node_yp * (baseTimeline.progress() * options.transitionSpriteIntensity);
                    }
  
                     //console.log(ghostEl.x)
  
                }
  
            });
  
                baseTimeline
                    // hide all 3 containers backgrounds 
                    .to([bgs[0], bgs[1], bgs[2]], options.transitionDuration, {
                        alpha: 0,
                        ease: gsap.Power0.easeOut
                    }, options.transitionDuration)
  
                    // add fn for container bg texture update
                    .add(updateTextureBgs, options.transitionDuration);
  
  
                    function updateTextureBgs() {
                      
                              for (var j = 0, len = containers.length; j < len; j++) {
    
                                  // update texture
                                  bgs[j].texture = texture_bg[0];
    
                                  // show background with new texture
                                  baseTimeline
                                      .to(bgs[j], options.transitionDuration, {
                                          alpha: 1,
                                          ease: gsap.Power0.easeOut
                                      }, options.transitionDuration);
                          
                      }
    
                  }
  
                   ///////////////////////////////    
  
            //  gesture effect 
  
            ///////////////////////////////
  
            function gestureEffect(slidesContainer , rafId_transition ) {
  
              // re init animation
              cancelAnimationFrame(rafId_transition);
  
              // make sure basetimeline is not running
              if (baseTimeline.isActive()) {
                  return;
              }
  
              // reinit x/y value for sprites and filters
              for (var i = 0, len = containers.length; i < len; i++) {
  
                  displacementSprites[i].x = 0;
                  displacementSprites[i].y = 0;
  
                  displacementFilters[i].scale.x = 0;
                  displacementFilters[i].scale.y = 0;
              }
  
              // add mouse / touch event
              slidesContainer
                  .on('mousemove', onPointerMove)
                  .on('touchmove', onPointerMove);
  
              function onPointerMove(eventData) {
  
                  // get mouse value
                  posx = eventData.data.global.x;
                  posy = eventData.data.global.y;
  
              }
  
               // use raf for smooth sprites / filters animation
               ticker();
  
               function ticker() {
  
                   rafId_gestureMove = requestAnimationFrame(ticker);
  
                   // make sure transition is done
                   if (ghostEl.x >= screen.width) {
  
                       // get new mouse positions with dumping intensity ( between [1-10] : 1 is faster)
                       node_xp += ((posx - node_xp) / options.mouseDispIntensity);
                       node_yp += ((posy - node_yp) / options.mouseDispIntensity);
  
                       for (var i = 0, len = containers.length; i < len; i++) {
  
                           // update disp scale x / y values
                           displacementFilters[i].scale.x = (node_xp - (displacementSprites[i].x));
                           displacementFilters[i].scale.y = (node_yp - (displacementSprites[i].y));
  
                           // update sprite x / y values
                           displacementSprites[i].position.x = node_xp;
                           displacementSprites[i].position.y = node_yp;
  
                       }
  
                   } else {
                       cancelAnimationFrame(rafId_gestureMove);
                   }
  
               }
           };
      }
    }

     hello(e){
        debugger
        
            let el = document.getElementById('hell');
            el.scrollIntoView();
          
    }
  }
  
  
