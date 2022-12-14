class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  brake() {
    console.log(this.speed);
    return (this.speed -= 10);
    // console.log(this.speed -10);
    console.log(this.speed);
  }
  accelerate() {
    return (this.speed += 10);
  }
  speedUs() {
    return (this.speed /= 1.6);
  }

  set setSpeed(x) {
    this.speed = x;
    return this.speed;
  }

  vroom(x) {
    return `Speed was ${this.speed}, usng vroom speed is ${this.speed + x}`;
  }
}

const bmwCl = new CarCl("bmw", 120);
// console.log(bmwCl);
// console.log(bmwCl.brake());
// console.log(bmwCl.accelerate());
// console.log((bmwCl.speedUs = 50));
// console.log(bmwCl.speedUs());
console.log((bmwCl.setSpeed = (50, 100)));
console.log(bmwCl.vroom(100));
