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

class FireWarrior extends Warrior {
  private fireDamage: number = 10;
  getDescription(): string {
    return `Огненный ${super.getDescription()} с дополнительным уроном от огня ${this.fireDamage}`;
  }
}
class FireWizard extends Wizard {
  private fireDamage: number = 10;
  getDescription(): string {
    return `Огненный ${super.getDescription()} с дополнительным уроном от огня ${this.fireDamage}`;
  }
}
class FireArcher extends Archer {
  private fireDamage: number = 10;
  getDescription(): string {
    return `Огненный ${super.getDescription()} с дополнительным уроном от огня ${this.fireDamage}`;
  }
}

class FrostWarrior extends Warrior {
  private slowdown: number = 30;
  getDescription(): string {
    return `Морозный ${super.getDescription()} с шансом замедления ${this.slowdown}%`;
  }
}
class FrostWizard extends Wizard {
  private slowdown: number = 30;
  getDescription(): string {
    return `Морозный ${super.getDescription()} с шансом замедления ${this.slowdown}%`;
  }
}
class FrostArcher extends Archer {
  private slowdown: number = 30;
  getDescription(): string {
    return `Морозный ${super.getDescription()} с шансом замедления ${this.slowdown}%`;
  }
}

class PoisonWarrior extends Warrior {
  private poisonDamage: number = 5;
  getDescription(): string {
    return `Ядовитый ${super.getDescription()} с периодическим уроном от яда ${this.poisonDamage}`;
  }
}
class PoisonWizard extends Wizard {
  private poisonDamage: number = 5;
  getDescription(): string {
    return `Ядовитый ${super.getDescription()} с периодическим уроном от яда ${this.poisonDamage}`;
  }
}
class PoisonArcher extends Archer {
  private poisonDamage: number = 5;
  getDescription(): string {
    return `Ядовитый ${super.getDescription()} с периодическим уроном от яда ${this.poisonDamage}`;
  }
}

abstract class UnitFactory {
  abstract createWarrior(): Warrior;
  abstract createWizard(): Wizard;
  abstract createArcher(): Archer;
}


class FireFactory extends UnitFactory {
  createWarrior(): Warrior { return new FireWarrior(); }
  createWizard(): Wizard { return new FireWizard(); }
  createArcher(): Archer { return new FireArcher(); }
}

class FrostFactory extends UnitFactory {
  createWarrior(): Warrior { return new FrostWarrior(); }
  createWizard(): Wizard { return new FrostWizard(); }
  createArcher(): Archer { return new FrostArcher(); }
}

class PoisonFactory extends UnitFactory {
  createWarrior(): Warrior { return new PoisonWarrior(); }
  createWizard(): Wizard { return new PoisonWizard(); }
  createArcher(): Archer { return new PoisonArcher(); }
}

function generateRandomUnit(): Unit {

  const factories: UnitFactory[] = [
    new FireFactory(),
    new FrostFactory(),
    new PoisonFactory(),
  ];

  const randomFactory = factories[Math.floor(Math.random() * factories.length)]!;
  const unitTypeIndex = Math.floor(Math.random() * 3);

  if (unitTypeIndex === 0) {
    return randomFactory.createWarrior();
  } else if (unitTypeIndex === 1) {
    return randomFactory.createWizard();
  } else {
    return randomFactory.createArcher();
  }
}
console.log("=== Генерация 10 случайных юнитов ===\n");
for (let i = 1; i <= 10; i++) {
  const randomUnit = generateRandomUnit();
  console.log(`Unit ${i}: ${randomUnit.getDescription()}`);
}