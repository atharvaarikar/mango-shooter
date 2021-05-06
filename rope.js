class rope {
    constructor(point1,body2){
       var opp={
           pointA:point1,
           bodyB:body2,
           length:50,
           stiffness:0.2
       }

       this.a=Matter.Constraint.create(opp);
       World.add(world,this.a);

       this.p=point1;


    }

    display(){
        if(this.a.bodyB){
            var b=this.a.bodyB.position

            line(this.p.x,this.p.y,b.x,b.y);

        }

    }

    fly(){
        this.a.bodyB=null
    }
}

