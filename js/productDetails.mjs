//import { getParam, getData, findProductId } from "./utils.mjs";
import { setLocalStorage, getLocalStorage, calculateDiscountPercentage } from "./utils.mjs";

function productDetailsTemplate(product) {
  let msrp = "";
  let msrp_val = product.SuggestedRetailPrice;
  let final_val = product.FinalPrice;
  if (msrp_val > final_val) {
    msrp = `<s>$${product.SuggestedRetailPrice}</s> -${calculateDiscountPercentage(msrp_val, final_val)}%`;
  }

  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="card__msrp">${msrp}</p>
    <p class="product-card__price">$${final_val}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}


export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId;
      this.product = {};
      this.dataSource = dataSource;
    }
    async init() {
      // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
      this.product = await this.dataSource.findProductById(this.productId);
      // once we have the product details we can render out the HTML
      this.renderProductDetails("main");
      // once the HTML is rendered we can add a listener to Add to Cart button
      // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
      document.getElementById("addToCart").addEventListener("click", this.addToCart.bind(this));
      
    }
    
      
    addToCart() {
      // setLocalStorage("so-cart", this.product);
      let cart = getLocalStorage("so-cart");
      if (cart === null) {
        cart = [];
      }
      cart.push(this.product);
      setLocalStorage("so-cart", cart);
    }
    renderProductDetails(selector) {
      const element = document.querySelector(selector);
      element.insertAdjacentHTML(
        "afterBegin",
        productDetailsTemplate(this.product)
      );
    }

  
  }
  