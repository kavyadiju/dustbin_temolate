class Launcher {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
       // Body.applyForce(this.sling.bodyA,this.sling.bodyA.position,{x:this.pointB.x,y:this.pointB.y});
        this.sling.bodyA = null;
        
    }

    display(){
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
                strokeWeight(4);
                line(pointA.x+20, pointA.y+20, pointB.x, pointB.y)      
            
            pop();
        }
    }
    
}