class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity=255;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      
      push();
      if(this.body.speed<5){
      var angle = this.body.angle;
      var pos= this.body.position;
      
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      
      }
      else {
        World.remove(world,this.body);

      
        this.visiblity=this.visiblity -5;
        tint(255,this.visiblity);
        rect(this.rect,this.body.position.x,this.body.position.y,30,40);
       
      
      }
      pop();
    }
}