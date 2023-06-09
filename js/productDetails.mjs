// This page will be responsible for all 
// of the functionality needed 
// to lookup data for a specific 
// product and display it in HTML
// it follows the black box philosophy
import {findProductById} from "./productData.mjs";
// productDetails() is the entrypoint  
// into our module and will make sure 
// that everything happens 
// in the right order
let product = {};

export default async function displayProductDetails(productId) {
   // specific code goes here
    product = await findProductById(productId);
    renderProductDetails();
};

function addProductToCart(product) {
    // I edited this function to add an aray of items to 
    // local storage insead of just one item it works
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
  

function renderProductDetails() {
    // specific code goes here
    document.querySelector("#productName").innerText = product.Brand.Name;
    document.querySelector("#productNameWithoutBrand").innerText =
      product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Image;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText =
      product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML =
      product.DescriptionHtmlSimple;
    document.querySelector("#addToCart").dataset.id = product.Id;
  };