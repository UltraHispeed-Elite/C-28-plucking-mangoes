class Stone{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
 
        this.image = loadImage("img/stone.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.radius);
        pop();
      }
}