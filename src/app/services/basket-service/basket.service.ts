import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Basket } from 'src/app/models/basket/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketList = new Subject<Basket[]>()
  constructor() { }
}
