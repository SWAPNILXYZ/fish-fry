class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("1/wood1.png");
      this.visibility = 255;
    }
     display(){
       if (this.body.speed < 4.5){
         super.display();
       }
       else {
         World.remove(world, this.body);
         push(); 
     this.visibility = this.visibility-5;
     tint(255,this.visibility);
     image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
     pop();
       }
     }
  };