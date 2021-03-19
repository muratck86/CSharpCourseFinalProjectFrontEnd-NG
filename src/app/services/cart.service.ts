import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor() { }

addToCart(product:Product) {
  let item = CartItems.find(cart => cart.product.productId === product.productId)
  if(item) {
    item.quantity++
  }
  else {
    CartItems.push({
      product: product,
      quantity: 1
    })
  }
}

listCartItems():CartItem[] {
  return CartItems
}

}
