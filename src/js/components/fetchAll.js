import { requestData } from "./requestData"

export const fetchAll = () => {
  const selectors = {
    pizza: {
      wrapper: document.querySelector('[data-pizza]'),
      endpoint: 'pizzas',
    },
    salad: {
      wrapper: document.querySelector('[data-salad]'),
      endpoint: 'salads',
    },
    drink: {
      wrapper: document.querySelector('[data-soft-drinks]'),
      endpoint: 'softdrinks',
    }
  }

  requestData(selectors.pizza.wrapper, selectors.pizza.endpoint);
  requestData(selectors.salad.wrapper, selectors.salad.endpoint);
  requestData(selectors.drink.wrapper, selectors.drink.endpoint);
}