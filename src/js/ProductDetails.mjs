import { setLocalStorage } from "./utils.mjs";


// Product details template function
function productDetailsTemplate(product) {
    return `
      <section class="product-detail">
        <h3>${product.Brand.Name}</h3>
        <h2 class="divider">${product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${product.Image.PrimaryLarge}"
          alt="${product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${product.FinalPrice}</p>
        <p class="product__color">${product.Colors[0].ColorName}</p>
        <p class="product__description">
          ${product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
        </div>
      </section>
    `;
}


export default class ProductDetails {

    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;

    }

    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        this.renderProductDetails("main");
        document
            .getElementById("addToCart")
            .addEventListener("click", this.addToCart.bind(this));
    }

    addToCart() {
        setLocalStorage("so-cart", this.product);
    }

    // Render product details HTML
    renderProductDetails() {
        const element = document.querySelector("main");
        element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
    }
}