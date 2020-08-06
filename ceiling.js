class Ceiling{
    constructor(x,y,width,height){
        var gr = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height,gr);
        this.width = width;
        this.height = height;

      World.add(world,this.body);
    }
    display(){
        var posi = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(posi.x,posi.y,this.width,this.height);
        
    }
};