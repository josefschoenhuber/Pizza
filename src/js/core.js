import { onSubmitFeedback } from "./components/onSubmitFeedback.js";
import { fetchAll } from "./components/fetchAll.js";
import { authorize } from "./components/authorize.js";
import { hamburgerToggle } from "./components/hamburgerToggle.js";
import { handleOrders } from "./components/handleOrders.js";

const core = async () => {
  const isAuthorized = await authorize();

  hamburgerToggle();

  if (isAuthorized) {
    handleOrders();
    fetchAll();
    onSubmitFeedback();
  }
}

document.addEventListener("DOMContentLoaded", core);