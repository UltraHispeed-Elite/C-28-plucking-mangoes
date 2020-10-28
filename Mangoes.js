class Mangoes{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1.0,
         
        }
        this.radius = radius;
this.x=x;
this.y=y;
     

        this.image = loadImage("img/mango.png");
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
 
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
      }
}