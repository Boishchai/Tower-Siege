class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 15
        }
        this.pointB = pointB
        this.slingShot = Constraint.create(options);

        World.add(world, this.slingShot);
    }

    fly(){
        this.slingShot.bodyA = null;
    }

    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);
            push();
            
                strokeWeight(10);
              line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            pop();
        }
    }
    
}