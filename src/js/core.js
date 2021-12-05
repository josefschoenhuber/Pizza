import { onSubmitFeedback } from "./components/onSubmitFeedback.js";
import { getPizzas } from "./components/getPizzas.js";
import { authorize } from "./components/authorize.js";

const core = async () => {
  const isAuthorized = await authorize();

  if (isAuthorized) {
    getPizzas();
    onSubmitFeedback();
  }
}

document.addEventListener("DOMContentLoaded", core);