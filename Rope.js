class Rope{
    constructor(point1,body2){
    var options={
     pointA:point1,
     bodyB:body2,
     stiffnes:0.5,
     length:100
    }
    this.body=Matter.Constraint.create(options)

    World.add(world,this.body)
    }
    display(){
        var pointA = this.body.pointA;
        var pointB = this.body.bodyB.position;

        line (pointA.x, pointA.y, pointB.x, pointB.y);
    }
}