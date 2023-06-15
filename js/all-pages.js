// Render html snippets
export async function renderSnippet(snippetLocation, contanerElementType){
    let container = document.querySelector(`${contanerElementType}`);
    let response = await fetch(snippetLocation);
    let snippetContent = await response.text();
    container.innerHTML = snippetContent;
  }
// Load html header and footer after html content loaded and before other css and js...
window.addEventListener("DOMContentLoaded", function(){
    renderSnippet("../snippets/header.html", "header");
    renderSnippet("../snippets/footer.html", "footer");
})