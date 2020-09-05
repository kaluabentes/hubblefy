import categories from "data/categories";
import { LATENCY } from "config/mockServer";

export default class CategoriesApi {
  static getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categories);
      }, LATENCY);
    });
  }
}
