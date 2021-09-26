class Rope {
  constructor(bodyA, pointB) {
   var options = {
      bodyA: bodyA,
      pontB: pointB,
      stiffness: 1.2,
      lenght: 450, 
    };

    this.pointB = pointB; 
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.body.Constraint;
      var pointB = this.pointB;
      push();
      stroke(48,22,8);
     strokeWeight(0);
      line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();
    }
  }
}
