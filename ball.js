class Atom {
    constructor(x, y, w, h) {
      let options = {
        restitution: 0.3
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
  
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("white");
      ellipseMode(CENTER);
      ellipse(0, 0, this.w, this.h);
      pop();
    }
  }