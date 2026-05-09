import { Figure, ICalculator } from './types';

export class TypeStats implements ICalculator {
  name = 'Статистика по видам';

  calculate(data: Figure[]): Record<string, number> {
    const result: Record<string, number> = {};
    for (const item of data) {
      result[item.type] = (result[item.type] || 0) + 1;
    }
    return result;
  }
}

export class ColorStats implements ICalculator {
  name = 'Статистика по цветам';

  calculate(data: Figure[]): Record<string, number> {
    const result: Record<string, number> = {};
    for (const item of data) {
      result[item.color] = (result[item.color] || 0) + 1;
    }
    return result;
  }
}