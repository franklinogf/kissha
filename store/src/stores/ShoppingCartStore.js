import { observable, action, computed, decorate, toJS } from "mobx"

export class ShoppingCartStore {
  products = []

  addProduct = (id, amount = 1) => {
    const productIndex = this.products.map(e => e.id).indexOf(id)
    
    if(productIndex > -1){
      this.products[productIndex].amount += amount
    }else{
      this.products.push({ id, amount })
    }
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
