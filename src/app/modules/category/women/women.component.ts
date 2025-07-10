import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  imports: [CommonModule],
  templateUrl: './women.component.html',
  styleUrl: './women.component.scss',
})
export class WomenComponent {
  products = [
    {
      route: '/category/app-women-detail/1',
      label: 'Womens wear 1',
      image: '/assets/images/women.jpg',
      price: 1000,
    },
    {
      route: '/category/app-women-detail/2',
      label: 'Womens wear 2',
      image: '/assets/images/women.jpg',
      price: 1500,
    },
    {
      route: '/category/app-women-detail/3',
      label: 'Womens wear 3',
      image: '/assets/images/women.jpg',
      price: 1000,
    },
    {
      route: '/category/app-women-detail/4',
      label: 'Womens wear 4',
      image: '/assets/images/women.jpg',
      price: 1000,
    },
    {
      route: '/category/app-women-detail/5',
      label: 'Womens wear 5',
      image: '/assets/images/women.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/6',
      label: 'Womens wear 6',
      image: '/assets/images/women.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/7',
      label: 'Womens wear 7',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/8',
      label: 'Womens wear 8',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
  ];

  constructor(private router: Router) {}

  // Navigate to the product detail page and pass the product data
  goToProductDetail(product: any) {
    this.router.navigate([product.route], {
      queryParams: {
        image: product.image,
        label: product.label,
        price: product.price,
      },
    });
  }
}
