import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  clothingCategories = [
    {
      name: 'Men',
      image: '/assets/images/man-home.png',
      route: 'app-men',
    },
    {
      name: 'Women',
      image: '/assets/images/women.jpg',
      route: 'app-women',
    },
    {
      name: 'Kids',
      image: '/assets/images/kid.jpg',
      route: 'app-kids',
    },
  ];

  navigateToCategory(category: any) {
    this.router.navigate([category.route], { relativeTo: this.route });
  }
}
