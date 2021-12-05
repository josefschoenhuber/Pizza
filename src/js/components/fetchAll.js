import { getPizzas } from "./getPizzas"
import { getSalads } from './getSalads'
import { getSoftDrinks } from "./getSoftDrinks";

export const fetchAll = () => {
  getPizzas();
  getSalads();
  getSoftDrinks();
}