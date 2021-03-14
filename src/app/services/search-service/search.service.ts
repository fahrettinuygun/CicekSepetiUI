import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchKey = new Subject()

  constructor() { }

  search(searchKey: string){
    this.searchKey.next(searchKey);
  }
}
