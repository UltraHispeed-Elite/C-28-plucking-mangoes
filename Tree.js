class Tree{
    constructor(x, y) {
   var options = {
       isStatic:true
   }
    
        this.x=x
        this.y=y
        this.width=450;
        this.height=600
        this.image = loadImage("img/tree.png");
        this.body = Bodies.rectangle(x, y, width,height, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}