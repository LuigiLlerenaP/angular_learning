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
