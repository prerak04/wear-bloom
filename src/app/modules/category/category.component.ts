import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  constructor(private router: Router) {}

  clothingCategories = [
    {
      name: 'Men',
      image: '/assets/images/categories/men.jpg',
      route: 'app-men',
    },
    {
      name: 'Women',
      image: '/assets/images/categories/women.jpg',
      route: 'app-women',
    },
    {
      name: 'Kids',
      image: '/assets/images/categories/kids.jpg',
      route: 'app-kids',
    },
    {
      name: 'Tops',
      image: '/assets/images/categories/tops.jpg',
      route: 'app-tops',
    },
    {
      name: 'Dresses',
      image: '/assets/images/categories/dresses.jpg',
      route: 'app-dresses',
    },
  ];

  navigateToCategory(category: any) {
    this.router.navigate([category.route]);
  }
}
