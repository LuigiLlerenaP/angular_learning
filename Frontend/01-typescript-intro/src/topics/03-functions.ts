function addNumbers(numberA: number, numberB: number): number {
  return numberA + numberB;
}
const result: number = addNumbers(1, 2);
console.log({ result });

const addNumbersTwo = (numA: number, numB: number): number => numA + numB;
const resultTwo: number = addNumbersTwo(1, 2);
console.log(resultTwo);

const addNumbersString = (nA: number, nB: number): string =>
  `The result of the addition is: ${nA + nB}`;
const resultString = addNumbersString(3, 5);
console.log(resultString);

const multiply = (
  firstN: number,
  secondN?: number,
  baseN: number = 2
): number => firstN + (secondN ?? 1) * baseN;

const multiplyResult: number = multiply(5);

console.log(multiplyResult);

///

enum CharacterName {
  Luigi = "Luigi",
  Mario = "Mario",
  Bowser = "Bowser",
  Peach = "Peach",
}

enum CharacterHp {
  Low = 50,
  Medium = 100,
  High = 150,
}

interface Character {
  nameCharacter: CharacterName;
  hp: CharacterHp;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
};

const characterOne: Character = {
  nameCharacter: CharacterName.Luigi,
  hp: CharacterHp.Low,
  showHp: (): string =>
    `Character: ${characterOne.nameCharacter}, HP: ${characterOne.hp}`,
};

console.log(characterOne.showHp());
console.log(healCharacter(characterOne, 10));
