// This page will be responsible for all 
// of the functionality needed 
// to lookup data for a specific 
// product and display it in HTML
// it follows the black box philosophy

// productDetails() is the entrypoint  
// into our module and will make sure 
// that everything happens 
// in the right order
export default function productDetails(productId) {
    return productId + 1;
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
    return 1;
};