export class Character {
  constructor(name, type) {
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Name error");
    }
    if (typeof type !== "string" || !types.includes(type)) {
      throw new Error("Type error");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
  levelUp() {
    if (this.health <= 0) {
      throw new Error("Нельзя повысить левел умершего");
    }
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
  damage(points) {
    if (this.health <= 0) {
      throw new Error("Нельзя ударить умершего");
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
