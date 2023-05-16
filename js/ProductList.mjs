
function productCardTemplate(product) {
    // if (filterProducts(product)) {
         let msrp = "";
         let msrp_val = product.SuggestedRetailPrice;
         let final_val = product.FinalPrice;
         if (msrp_val > final_val) {
             msrp = `<s>$${product.SuggestedRetailPrice}</s> -${calculateDiscountPercentage(msrp_val, final_val)}%`;
         }
 
 
         return `<li class="product-card">
     <a href="../product_pages/index.html?product=${product.Id}">
     <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.Name}"/>
     <h3 class="card__brand">${product.Brand.Name}</h3>
     <h2 class="card__name">${product.Name}</h2>
     <p class="card__msrp">${msrp}</p>
     <p class="product-card__price">$${final_val}</p>
     </li>`;
     //}
 }

export default class ProductListing {
    constructor(category, dataSource, listElement) {
    
        // We passed in this information to make our class as reusable as possible.
        // Being able to define these things when we use the class will make it very flexible

        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        // our dataSource will return a Promise...so we can use await to resolve it.
        const list = await this.dataSource.getData(this.category);
        // render the list - to be completed
        this.renderList(list);
    }

    // render method first stretch
    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }

}
// function to take a list of objects and a template and insert the objects as HTML into the DOM
function renderListWithTemplate(
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = false) {
    const htmlStrings = list.map(templateFn);
    // if clear is true we need to clear out the contents of the parent.
    if (clear) {
      parentElement.innerHTML = "";
    }
  
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
  }

  function calculateDiscountPercentage(msrp, final) {
    return Math.round((msrp - final) / msrp * 100);
  }