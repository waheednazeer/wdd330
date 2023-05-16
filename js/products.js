import {  getParam,loadHeaderFooter} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./productDetails.mjs"



const dataSource = new ExternalServices();

const productId = getParam("product");
// console.log(dataSource.findProductById(productId));

const product = new ProductDetails(productId, dataSource);
product.init();





let file= "../json/tents.json";

loadHeaderFooter();

async function fetchAPI(file) {
    let response= await fetch(file);
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        console.log(data);
      }

}







  const category = getParam("category");

  fetchAPI(file);