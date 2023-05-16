





export function getParam(param) {
    console.log(param);
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    const product = urlParams.get(param);
    console.log(product);
    return product;
  }


  export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  // save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  
  async function loadTemplate(path) {
    const html = await fetch(path);
    const template = await html.text();
    return template;
  }
  export async function loadHeaderFooter() {
    const path = "../headerfooter/"
    const headerStr = await loadTemplate(`${path}header.html`);
    const footerStr = await loadTemplate(`${path}footer.html`);
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
    renderWithTemplate(headerStr, header)
    renderWithTemplate(footerStr, footer)
  
    displayCounter();
  }
  function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if (callback) {
      callback(data);
    }
  }
  function displayCounter() {
    let cartItems = getLocalStorage("so-cart");
    if (!cartItems) {
      const element = document.querySelector("#cart-count");
      element.textContent = 0;
    } else {
      const element = document.querySelector("#cart-count");
      cartItems = getLocalStorage("so-cart").length;
      element.textContent = cartItems;
    }
  }

  export function calculateDiscountPercentage(msrp, final) {
    return Math.round((msrp - final) / msrp * 100);
  }