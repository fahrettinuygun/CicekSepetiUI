import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket-service/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basketCount:number;
  basketTotalPrice:number;
  freeCargo:boolean = false;
  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
    this.basketService.basketList.subscribe(basketlist => {
      this.basketCount = 0;
      this.basketTotalPrice = 0;
      basketlist.forEach(basketItem => {
        this.basketCount += basketItem.count;
        this.basketTotalPrice += basketItem.totalPrice;
      })
      if(this.basketTotalPrice >= 500){
        this.freeCargo = true;
      }
      else{
        this.freeCargo = false;
      }
    })
  }

}
