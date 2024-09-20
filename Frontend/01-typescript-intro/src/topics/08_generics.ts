function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hell, word");
const amINumber = whatsMyType<number>(11.4444);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log("forEach");
amIArray.forEach((num) => {
  console.log(num);
});
console.log("Map");
amIArray.map((num) => {
  console.log(num + 1);
});

console.log(amINumber.toFixed(1));
console.log(amIString.split(","));
