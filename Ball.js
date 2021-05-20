class Ball{
    constructor(x, y, width) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x, y-width/2, width/2, options);
        this.width = width/2;
        this.height = height
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width,this.width);
        pop();
      }
}