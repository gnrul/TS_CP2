import * as fs from "fs";
import { Figure, IReader } from "./types";

export class LogFileReader implements IReader {
  constructor(private filePath: string) {}

  read(): Figure[] {
    if (!fs.existsSync(this.filePath)) {
      console.error(`Ошибка: Файл ${this.filePath} не найден!`);
      return [];
    }

    try {
      const text = fs.readFileSync(this.filePath, "utf-8");
      return text
        .split("\n")
        .map((line: string) => line.trim())
        .filter((line: string) => line.length > 0) 
        .map((line: string) => {
          const parts = line.split(/[ ,]+/);
          return {
            type: parts[0] || "неизвестно",
            color: parts[1] || "неизвестно",
          };
        });
    } catch (err) {
      console.error("Ошибка:", err);
      return [];
    }
  }
}
