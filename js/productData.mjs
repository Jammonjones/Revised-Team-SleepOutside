// below is an enviroment variable
const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}
export default async function getData(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);
  // data.Result instead of data??? why???
  // data sent back from APIs is structured differently
  return data.Result;
}

export async function findProductById(id) {
  // async/await syntax is easier to read than .then() based promise
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}
