import { LogFileReader } from './reader';
import { TypeStats, ColorStats } from './calculators';
import { IReader, ICalculator } from './types';

class App {
  constructor(private reader: IReader, private calculators: ICalculator[]) {}

  run() {
    const figures = this.reader.read();
    for (const calc of this.calculators) {
      console.log(`\n=== ${calc.name} ===`);
      const stats = calc.calculate(figures);
      console.log(stats);
    }
  }
}

const reader = new LogFileReader('logs.txt');
const calculators = [new TypeStats(), new ColorStats()];

const app = new App(reader, calculators);
app.run();