// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function renderWithTemplate(templateFn, parentElement, data, callback, position = "afterbegin", clear = true) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  parentElement.insertAdjacentHTML(position, template);
  if (callback){
    callback(data);
  }
}
// currying is returning a new function
function loadTemplate(path) {
  return async function() {
    let response = await fetch(path)
    if (response.ok) {
      let html = await response.text();
      console.log(html);
      return html;
    }
  }
}
export async function loadHeaderFooter() {
  let headerTemplateFn = loadTemplate("/partials/header.html");
  let footerTemplateFn = loadTemplate("/partials/footer.html");
  let headerBoy = document.querySelector("this-is-header");
  let footerBoy = document.querySelector("this-is-footer");
  renderWithTemplate(headerTemplateFn, headerBoy);
  renderWithTemplate(footerTemplateFn, footerBoy);
}