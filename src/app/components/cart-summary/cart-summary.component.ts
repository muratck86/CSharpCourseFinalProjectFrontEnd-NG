import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]

  constructor(private cartService: CartService, private toastrService:ToastrService) { }

  ngOnInit() {
    this.getCart()
  }

  getCart(){
    this.cartItems= this.cartService.listCartItems()
  }

  removeFromCart(product:Product) {
    this.cartService.removeFromCart(product)
    this.toastrService.show(product.productName + " Removed from cart")
  }

}
