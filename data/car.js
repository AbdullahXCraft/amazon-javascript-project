class Car {
  #brand;
  #model;
  speed = 0;
  topSpeed = 200;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${this.isTrunkOpen ? 'Open' : 'Closed'}`);
  }
  go() {
    if (!this.isTrunkOpen && this.speed + 5 <= this.topSpeed) {
      this.speed += 5;
    }
  }

  brake() {
    if (this.speed - 5 >= 0) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;
  
  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
    this.topSpeed = 300;
  }

  go() {
    if (this.speed + 5 <= this.topSpeed) {
      this.speed += this.acceleration;
    }
  }

  openTrunk() {

  }

  closeTrunk() {

  }

  displayInfo() {
    
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'corolla'}
);
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'}
);

console.log(car1);
console.log(car2);

car1.go();
car1.go();
car2.go();

car1.displayInfo();
car2.displayInfo();

car1.brake();
car1.brake();
car2.go();

car1.displayInfo();
car2.displayInfo();

car1.openTrunk();
car1.go();

car2.openTrunk();
car2.go();

car1.displayInfo();
car2.displayInfo();

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});
for (let i = 0; i < 50; i++) {
  car2.go();
  raceCar.go();
}
car2.displayInfo();
raceCar.displayInfo();