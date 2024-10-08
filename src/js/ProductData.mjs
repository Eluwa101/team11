
const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}


export default class ProductData {
  constructor() {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    const resp = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(resp);
    return data.Result;
    // return fetch(this.path)
    //   .then(convertToJson)
    //   .then((data) => data);
  }
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
    // const products = await this.getData();
    // return products.find((item) => item.Id === id);
  }
}
