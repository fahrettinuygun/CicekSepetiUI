import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category-service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:Category[];
  selectedCategory:number = 0;
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  changeCategory(category:Category){
    this.selectedCategory = category.id;
    this.categoryService.selectedCategory.next(category);
  }

}
