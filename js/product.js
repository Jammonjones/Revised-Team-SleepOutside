import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

// this can get the product id when someone navigates to
// the product-details page
let productId = getParam("productId");
console.log(findProductById(productId));