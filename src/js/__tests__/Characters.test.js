import * as characters from "../app";

test("Тест levelUp", () => {
  const hero = new characters.Bowman("Лучник");
  const expected =
    [hero.level + 1, hero.attack * 1.2, hero.defence * 1.2, 100].toString() +
    " error: Нельзя повысить левел умершего";

  hero.levelUp();
  let result = [hero.level, hero.attack, hero.defence, hero.health].toString();
  hero.health = 0;

  try {
    hero.levelUp();
  } catch (e) {
    result += " error: " + e.message;
  }
  expect(result).toBe(expected);
});

test("Тест damage", () => {
  const hero = new characters.Bowman("Лучник");
  const expected =
    (hero.health - 1 * (1 - hero.defence / 100)).toString() +
    " error: Нельзя ударить умершего";

  hero.damage(1);
  let result = hero.health;
  hero.health = 0;

  try {
    hero.damage(1);
  } catch (e) {
    result += " error: " + e.message;
  }
  expect(result).toBe(expected);
});
