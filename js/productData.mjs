function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}
// we can use this function for more than tents by adding
// categories in the paramenter
export function getData(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    // It is very common to see short 
    // functions that just return some 
    // value or expression written using 
    // the arrow function syntax.
    .then((data) => data);
}

export async function findProductById(id) {
  // async/await syntax is easier to read than .then() based promise
  const products = await getData();
  return products.find((item) => item.Id === id);
}
