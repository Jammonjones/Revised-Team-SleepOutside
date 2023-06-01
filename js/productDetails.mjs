// This will handle everything with getting a products details and loading them on the page using the product id sent by the html url parameters
// Import some other functions that will be used here
import { findProductById } from "./productData.mjs";

export async function productDetails(productId){
    let currentProduct = await findProductById(productId);
    console.log(currentProduct);
}
