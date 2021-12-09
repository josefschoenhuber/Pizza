import { onSubmitFeedback } from "./functions/onSubmitFeedback.js";
import { fetchAll } from "./functions/fetchAll.js";
import { authorize } from "./functions/authorize.js";
import { hamburgerToggle } from "./functions/hamburgerToggle.js";
import { handleOrders } from "./functions/handleOrders.js";
import { handleFeedbacks } from "./functions/handleFeedbacks.js";

const core = async () => {
  const isAuthorized = await authorize();

  hamburgerToggle();

  if (isAuthorized) {
    handleFeedbacks();
    handleOrders();
    fetchAll();
    onSubmitFeedback();
  }
}

document.addEventListener("DOMContentLoaded", core);