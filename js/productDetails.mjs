// This will handle everything with getting a products details and loading them on the page using the product id sent by the html url parameters
// Import some other functions that will be used here
import { findProductById } from "./productData.mjs";

// Getting the JS object about the product based on the product ID received
export async function productDetails(productId){
    let currentProduct = await findProductById(productId);
    renderProductDetails(currentProduct, productId);
}

// Add content to the product details page using the currentProdcut Information
function renderProductDetails(product, productId){
    document.querySelector("#productName").textContent = product.Name;
    document.querySelector("#productNameWithoutBrand").textContent = product.NameWithoutBrand;
    document.querySelector("#productImage").setAttribute("src", product.Image);
    document.querySelector("#productImage").setAttribute("alt", "Product Image");
    document.querySelector("#productFinalPrice").textContent = `$${product.FinalPrice}`;
    document.querySelector("#productColorName").textContent = product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;
    document.querySelector("#addToCart").setAttribute("data-id", productId);
}
