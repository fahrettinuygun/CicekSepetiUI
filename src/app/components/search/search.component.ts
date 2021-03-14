import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search-service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchKey:string;
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  search(){
    if(this.searchKey.length >= 3 || this.searchKey.length == 0){
      this.searchService.search(this.searchKey);
    }
  }

}
