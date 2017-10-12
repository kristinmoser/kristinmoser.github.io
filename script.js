    var type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

    PIXI.utils.sayHello(type)
    //Create the renderer
  var colors = [0x264653, 0x2A9D8F, 0xE9C46A, 0xF4A261, 0xE76F51];
  var circles = [];
  var renderer = PIXI.autoDetectRenderer(
    1000, 800,
    {antialias: false, transparent: true, resolution: 1}
  );
//Add the canvas to the HTML document
document.getElementById('js').appendChild(renderer.view);
    renderer.view.style.position = 'absolute';
    renderer.view.style.zIndex = -11;
    renderer.view.style.width = '100%';
    renderer.view.style.height = '100%';
    renderer.view.style.left = 0;
    renderer.view.style.right = 0;
    renderer.view.style.margin = 'auto';

//Create a container object called the `stage`
var stage = new PIXI.Container();
for (var i = 0; i < 200; ++i){
  var circle = new PIXI.Graphics();
  circle.beginFill(colors[Math.floor((Math.random() * 5))]);
  circle.drawCircle(0, 0, 1.6);
  circle.endFill();
  circle.x = Math.floor((Math.random() * renderer.width));
  circle.y = -(Math.random() * 1000);
  circle.speed = Math.random() * 2;
  stage.addChild(circle);
  circles.push(circle);
}

renderer.render(stage);

function gameLoop() {
  //Loop this function at 60 frames per second
  requestAnimationFrame(gameLoop);
  for (var i =0; i < circles.length; ++i){
    circles[i].y += 1;
    if (circles[i].y > 1000) {
      circles[i].y = circles[i].y = -(Math.random() * 1000);
    }
  }
  renderer.render(stage);
}
gameLoop();