import { observable, action, computed, decorate } from "mobx"

export class ShoppingCartStore {
  
  products = []

  addProduct = (id,amount = 1) => {
    this.products.push({
      [id]:amount
    })
    this.viewProducts()
  }
  viewProducts = () => {
    this.products.map(product=>console.log(product))
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
