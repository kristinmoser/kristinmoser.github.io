var elem = document.getElementById('draw-shapes');
var two = new Two().appendTo(elem);
var velocity = -2.0;
var circle = two.makeCircle(-140, 0, 50);
var circle1 = two.makeCircle(-70, 0, 50);
var circle2 = two.makeCircle(70, 0, 50);
var circle3 = two.makeCircle(140, 0, 50);
circle.fill = '#FF8000';
circle1.fill = 'rgba(0, 200, 255, 0.75)';
circle2.fill = '#FF8000';
circle3.fill = 'rgba(0, 200, 255, 0.75)';

var group = two.makeGroup(circle, circle1, circle2, circle3);
group.translation.set(two.width / 2, two.height / 2);
group.scale = 0;
group.noStroke();

// Bind a function to scale and rotate the group
// to the animation loop.
two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (group.scale > 0.9999) {
    group.scale = group.rotation = 0;
  }
  var t = (1 - group.scale) * 0.125;
  group.scale += t;
  //group.rotation += t * 4 * Math.PI;
}).play();
