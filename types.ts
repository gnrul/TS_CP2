export interface Figure {
  type: string;
  color: string;
}

export interface IReader {
  read(): Figure[];
}

export interface ICalculator {
  name: string;
  calculate(data: Figure[]): Record<string, number>;
}