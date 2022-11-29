const audi = {
  name: "Audi",
  model: "R8",
};
const Hyundai = [
  {
    name: "Hyundai",
    model: "Creta",
  },
  {
    name: "Hyundai",
    model: "Venue",
  },
  {
    name: "Hyundai",
    model: "i20",
  },
];
const Porsche = {
  name: "Porsche",
  model: "Cayman GT4",
  carDetails(speed, height) {
    console.log(
      ` Brand: ${this.name}\n Model: ${this.model}\n Top Speed: ${speed}, ${height}`
    );
  },
};
Porsche.carDetails(340, 1334);
Porsche.carDetails.call(audi, 280, 1567);
Porsche.carDetails.apply(Hyundai[0], [210, 1580]);
Hyundai.forEach((car) => Porsche.carDetails.call(car, "xxx", "xxx"));

const carDetails = Porsche.carDetails.bind(audi);
carDetails(190, 1445);
carDetails(276, 1540);
