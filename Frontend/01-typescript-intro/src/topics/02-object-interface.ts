enum StriderSkills {
  BASH = "Bash",
  COUNTER = "Counter",
  HEALING = "Healing",
}

type Skill = StriderSkills;

interface Strider {
  firstName: string;
  hp: number;
  skills: Skill[];
  hometown?: string;
}

const strider: Strider = {
  firstName: "Strider",
  hp: 100,
  skills: [StriderSkills.BASH, StriderSkills.COUNTER],
};

strider.hometown = "Rivendell";

console.table(strider);
