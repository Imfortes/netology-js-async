import read from "../reader";
import json from "../parser";

export default class GameSavingLoader {
  async load() {
    try {
      const data = await read(); // возвращается Promise!
      const value = await json(data); // возвращается Promise!
      return value;
    } catch (error) {
      throw new Error('Error loading data');
    }
  }
}
