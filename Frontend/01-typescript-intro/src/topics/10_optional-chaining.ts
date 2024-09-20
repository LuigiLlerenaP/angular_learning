interface Passenger {
  name: string;
  children?: string[];
}

const passengerOne: Passenger = {
  name: "Luigi",
};
const passengerTwo: Passenger = {
  name: "Melisa",
  children: ["Natalia", "Elizabeth"],
};

const printChildren = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
  return howManyChildren;
};

printChildren(passengerOne);

printChildren(passengerTwo);
