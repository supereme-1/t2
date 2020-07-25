class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       
        this.pointB = bodyB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyB = null;
    }

    display(){
        if(this.sling.bodyA !== null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
    
}