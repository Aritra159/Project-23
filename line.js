class Line{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var pointA=this.body.bodyA.position
        var pointb=this.body.bodyB.position
        strokeWeight(4);
        line(pointA.x,pointA.y,pointb.x,pointb.y);
    }
}