import { observable, action, computed, decorate } from "mobx"

export class ShoppingCartStore {
  // LocalStorage or empty array
  products = JSON.parse(localStorage.getItem('shoppingCart')) || []

  addProduct = (id, amount = 1) => {
    // check if the addedProduct already exists on the list
    const productIndex = this.products.map(e => e.id).indexOf(id)
    if (productIndex > -1) {
      // if it exists update the amount of the product
      this.products[productIndex].amount += amount
    } else {
      // if it doesn't exists insert new product
      this.products.push({ id, amount })
    }
    // Every time a product is added to the shopping cart, save the products list into a localStorage
    localStorage.setItem("shoppingCart",JSON.stringify(this.products))
  }
  get amountOfProducts() {
    return this.products.length
  }
}

decorate(ShoppingCartStore, {
  products: observable,
  addProduct: action,
  amountOfProducts: computed,
})
