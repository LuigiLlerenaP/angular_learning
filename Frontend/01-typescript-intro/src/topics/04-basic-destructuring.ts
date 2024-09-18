interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPLayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 35,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const {
  song: anotherSong,
  songDuration: duration,
  details: { author },
} = audioPLayer;
console.log(anotherSong, duration, author);
console.log("//////////////////////////////////f ");

enum Character {
  Goku = "Goku",
  Vegeta = "Vegeta",
  Gohan = "Gohan",
  Piccolo = "Piccolo",
}

enum PowerLevel {
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Ultra = "Ultra",
}

interface CharacterDbz {
  name: Character;
  powerLevel: PowerLevel;
}

const characters: CharacterDbz[] = [
  { name: Character.Gohan, powerLevel: PowerLevel.High },
  { name: Character.Goku, powerLevel: PowerLevel.High },
];

// Destructure specific characters from the array
const [gohanCharacter, gokuCharacter] = characters;

// Destructure properties of Gohan and Goku
const { name: gohanName, powerLevel: gohanPowerLevel } = gohanCharacter;
const { name: gokuName, powerLevel: gokuPowerLevel } = gokuCharacter;

console.log(`Gohan: ${gohanName}, Power Level: ${gohanPowerLevel}`);
console.log(`Goku: ${gokuName}, Power Level: ${gokuPowerLevel}`);

console.log("Gohan Character:", gohanCharacter);
console.log("Goku Character:", gokuCharacter);
