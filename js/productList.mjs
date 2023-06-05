import {getData} from "../js/productData.mjs";
import {renderListWithTemplate} from "./utils.mjs";
// the function below generates 
// a list of product cards in HTML from an array.
export default async function productList(selector, category) {
    // get the element we will insert the list into from the selector
    let theSelector = document.querySelector(selector);
    // get the list of products 
    let products = await getData(category);
    console.log(products);
    // render out the product list to the element
    renderListWithTemplate(productCardTemplate, theSelector, products);
}

export default async function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="../product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`;
}

// what do I write here?
function renderList() {
  foreach (product in products)
  {
    productCardTemplate();
  }
}