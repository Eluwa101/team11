import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const source = new ProductData();

const list = new ProductList("tents", source);
list.init();
