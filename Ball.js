class Ball {
    constructor(x, y,radius) {
      var options = {
        restitution:0.01,
        friction:0.1,
        isStatic:true
      }
      this.body = Matter.Bodies.circle(x, y,radius, options);
     this.body.shapeColor="white"
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     circle(0, 0,this.radius);
      pop();
    }
  };