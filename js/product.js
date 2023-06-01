import { setLocalStorage, getLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { productDetails } from "./productDetails.mjs";

// Load product details page using url param and imported prebuilt function
const productId = getParam("product");
productDetails(productId);

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

