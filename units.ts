abstract class Unit {
  abstract getDescription(): string;
}

class Warrior extends Unit {
  getDescription(): string {
    return "воин, базовый урон 15";
  }
}

class Wizard extends Unit {
  getDescription(): string {
    return "маг, базовый урон 10";
  }
}

class Archer extends Unit {
  getDescription(): string {
    return "лучник, базовый урон 12";
  }
}

abstract class UnitDecorator extends Unit {
  constructor(protected unit: Unit) {
    super();
  }

  abstract getDescription(): string;
}

class Fire extends UnitDecorator {
  private fireDamage: number = 10;

  getDescription(): string {
    return `Огненный ${this.unit.getDescription()} с дополнительным уроном от огня ${this.fireDamage}`;
  }
}

class Frost extends UnitDecorator {
  private slowdown: number = 30;
  getDescription(): string {
    return `Морозный ${this.unit.getDescription()} с шансом замедления ${this.slowdown}%`;
  }
}

class Poison extends UnitDecorator {
  private poisonDamage: number = 5;
  getDescription(): string {
    return `Ядовитый ${this.unit.getDescription()} с периодическим уроном от яда ${this.poisonDamage}`;
  }
}

function generateRandomUnit(): Unit {
  const BaseUnits: (new () => Unit)[] = [Warrior, Wizard, Archer];
  const Decorators: (new (unit: Unit) => Unit)[] = [Fire, Frost, Poison];

  const RandomBaseClass =
    BaseUnits[Math.floor(Math.random() * BaseUnits.length)]!;
  let myUnit: Unit = new RandomBaseClass();

  const RandomDecoratorClass =
    Decorators[Math.floor(Math.random() * Decorators.length)]!;
  myUnit = new RandomDecoratorClass(myUnit);

  return myUnit;
}

console.log("=== Генерация случайных юнитов ===\n");

for (let i = 1; i <= 5; i++) {
  const randomUnit = generateRandomUnit();
  console.log(`Юнит ${i}: ${randomUnit.getDescription()}`);
}
