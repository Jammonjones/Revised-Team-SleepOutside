import {getData} from "../js/productData.mjs";
// the function below generates 
// a list of product cards in HTML from an array.
export default async function productList(selector, category) {
    // get the element we will insert the list into from the selector
    let theSelector = document.querySelector(selector);
    // get the list of products 
    let products = await getData(category);
    console.log(products);
    // render out the product list to the element
}