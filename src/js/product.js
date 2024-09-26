import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { getParams } from "./utils.mjs";
import { ProductDetails } from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   setLocalStorage("so-cart", product);
// }

// add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }
const productId = getParams("product");

const product = new ProductDetails(productId, dataSource);
product.init();

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", product.addToCart.bind(product));
