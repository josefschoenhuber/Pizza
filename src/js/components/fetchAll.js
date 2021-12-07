import { requestData } from "./requestData"

export const fetchAll = () => {
  const selectors = {
    pizza: {
      wrapper: document.querySelector('[data-pizza]'),
      endpoint: 'pizzas',
      type: 'pizza',
    },
    salad: {
      wrapper: document.querySelector('[data-salad]'),
      endpoint: 'salads',
      type: 'salad',
    },
    drink: {
      wrapper: document.querySelector('[data-soft-drinks]'),
      endpoint: 'softdrinks',
      type: 'softdrink',
    }
  }

  requestData(selectors.pizza.wrapper, selectors.pizza.endpoint, selectors.pizza.type);
  requestData(selectors.salad.wrapper, selectors.salad.endpoint, selectors.salad.type);
  requestData(selectors.drink.wrapper, selectors.drink.endpoint, selectors.drink.type);
}