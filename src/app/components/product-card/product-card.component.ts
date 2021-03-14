import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket/basket';
import { Product } from 'src/app/models/product/product';
import { BasketService } from 'src/app/services/basket-service/basket.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product:Product;

  addedCount = 0;
  basketList: Basket[];

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.basketList = [];
    this.basketService.basketList.subscribe(list => {
      this.basketList = list;
    })
  }

  addToBasket(){
    this.addedCount ++;
    let isAdded = false;
    this.basketList.forEach(basketItem => {
      if(basketItem.product.id == this.product.id){
        basketItem.count++;
        basketItem.totalPrice += this.product.price;
        isAdded = true;
      }
    })
    if(!isAdded){
      let basket = new Basket();
      basket.product = this.product;
      basket.count = this.addedCount;
      basket.totalPrice = this.product.price;
      this.basketList.push(basket);
    }
    this.basketService.basketList.next(this.basketList);
  }

  removeToBasket(){
    this.addedCount --;
    this.basketList.forEach(basketItem => {
      if(basketItem.product.id == this.product.id){
        basketItem.count--;
        basketItem.totalPrice -= this.product.price;
      }
    })
    this.basketService.basketList.next(this.basketList);
  }

}
