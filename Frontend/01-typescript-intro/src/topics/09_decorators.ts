function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New property";
    hello = "override";
  };
}

@classDecorator
class SuperClass {
  public myProperty: string = "ABC1234";

  print() {
    console.log("Hello, world");
  }
}

console.log("Definition of my class:");
console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);
