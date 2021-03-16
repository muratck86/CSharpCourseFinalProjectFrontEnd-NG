import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = []
  allCategories: Category = {categoryId: 0, categoryName: ""}
  currentCategory: Category = this.allCategories
  currentCategoryClass:string = "list-group-item"

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result.data
    })
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category
  }

  getCurrentCategoryClass(category:Category) {
      return category == this.currentCategory 
      ? "list-group-item active" 
      : "list-group-item"
  }


}
