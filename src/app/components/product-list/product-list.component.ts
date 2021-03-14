import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Category } from 'src/app/models/category/category';
import { Product } from 'src/app/models/product/product';
import { CategoryService } from 'src/app/services/category-service/category.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { SearchService } from 'src/app/services/search-service/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  filteredProductList: Product[];
  selectedCategory:Category;
  notFound:boolean = false;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private searchService: SearchService
  ) { 

  }

  ngOnInit(): void {
    this.selectedCategory = this.categoryService.categories[0];
    this.products = this.productService.getProduct();
    this.filteredProductList = this.products;
    this.categoryService.selectedCategory.subscribe(category => {
      this.selectedCategory = category
      this.filteredProductList = category.id == 0 ? this.products : this.products.filter(product => product.categoryId == category.id);
      this.notFound = this.filteredProductList.length == 0 ? true : false;
    });
    this.searchService.searchKey.subscribe((key:string) => {
      this.filteredProductList = key.length == 0 ? this.products : this.products.filter(product => product.name.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) != -1);
      this.notFound = this.filteredProductList.length == 0 ? true : false;
    })
  }

}
