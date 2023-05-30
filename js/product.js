import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

function addProductToCart(product) {
  // I edited this function to add an aray of items to local storage insead of just one item it works
  // on local but not yet on netlify
  let currentCartItems = getLocalStorage("so-cart");
  if (!Array.isArray(currentCartItems)){
  currentCartItems = [];
  }
  currentCartItems.push(product);
  setLocalStorage("so-cart", currentCartItems);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

// this can get the product id when someone navigates to
// the product-details page
let productId = getParam("productId");
console.log(findProductById(productId));