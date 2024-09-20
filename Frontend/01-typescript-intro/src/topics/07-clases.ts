interface PersonI {
  getFirstName(): string;
  getLastName(): string;
  getAddress(): string;
  setFirstName(firstName: string): void;
  setLastName(lastName: string): void;
  setAddress(address: string): void;
}

class Person implements PersonI {
  private firstName: string;
  private lastName: string;
  private address: string;

  // Constructor para inicializar las propiedades
  constructor(firstName: string, lastName: string, address: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }

  // Métodos públicos como intermediarios
  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getAddress(): string {
    return this.address;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  setAddress(address: string): void {
    this.address = address;
  }
}

const personInstance = new Person("Luigi", "Llerena", "Quito");
console.log(personInstance.getFirstName()); // Luigi
console.log(personInstance.getLastName()); // Llerena
console.log(personInstance.getAddress()); // Quito

//
interface Character {
  name: string;
  alias?: string;
  age?: number;
  birthday?: Date;
}

class OnePieceCharacter implements Character {
  constructor(
    public name: string,
    public alias?: string,
    public age?: number,
    public birthday?: Date
  ) {}

  getProfile(): string {
    return `
      Name: ${this.name}
      Alias: ${this.alias || "N/A"}
      Age: ${this.age || "N/A"}
      Birthday: ${
        this.birthday ? this.birthday.toISOString().split("T")[0] : "N/A"
      }
    `;
  }
}

const luffy = new OnePieceCharacter(
  "Monkey D. Luffy",
  "Straw Hat Luffy",
  19,
  new Date("1997-05-05")
);
console.log(luffy.getProfile());

//Composición sobre Herencia

class PersonHero {
  constructor(
    public firstName: string,
    public lastName: string,
    public address?: string
  ) {}
}

class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: PersonHero
  ) {}
}

// Creating an instance of PersonHero
const bruce = new PersonHero("Bruce", " Wayne", "New York");

// Creating an instance of Hero
const batMan = new Hero("BatMan", 4, "Bruce Wayne", bruce);

console.log({ batMan });
