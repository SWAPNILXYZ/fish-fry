class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB=pointB;

        this.sling3 = loadImage("1/sling3.png");
    }
    attach(body){
        this.sling.bodyA=body;
    }
    fly(){
        this.sling.bodyA=null;     
    }
    display(){
        if (this.sling.bodyA){

        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("white");
        strokeWeight(4);
       
        if (pointA.x<130){
             
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }
    }
}
}
