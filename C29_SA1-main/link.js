
class Link{

    constructor(bodyA,bodyB){

        this.link=Constraint.create(
            {
             bodyA:bodyA.body.bodies[bodyA.body.bodies.length-2],
             pointA:{x:0,y:0},
             bodyB:bodyB,
             pointB:{x:0,y:0},
             length:6,
             stiffness:0.01,  
            }
        )
            World.add(engine.world,this.link)





    }
}




























