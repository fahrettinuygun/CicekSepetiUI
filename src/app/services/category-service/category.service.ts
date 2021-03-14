import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Category } from 'src/app/models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {name:"Tüm Kategoriler", id:0},
    {name:"Elektronik",id:1},
    {name:"Ev ve Yaşam",id:2},
    {name:"Evcil Hayvan",id:3},
    {name:"Kitap",id:4},
    {name:"Oyuncak",id:5},
    {name:"Spor",id:6},
    {name:"Çiçek",id:7},
    {name:"Hediye",id:8},
    {name:"Moda, Aksesuar",id:9},
    {name:"Ofis Kırtasiye",id:10},
    {name:"Parfüm",id:11},
    {name:"Kişisel Bakım",id:12},
    {name:"Petshop",id:13}
  ];

  selectedCategory = new Subject<Category>()

  constructor() { }

  setSelectedCategory(category: Category){
    this.selectedCategory.next(category);
  }
  getCategories(): Category[]{
    return this.categories;
  }
}
