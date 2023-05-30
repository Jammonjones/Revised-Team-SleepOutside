import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

// this can get the product id when someone navigates to
// the product-details page
let productId = getParam("productId");
productDetails(productId);