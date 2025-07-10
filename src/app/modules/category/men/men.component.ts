import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss',
})
export class MenComponent {
  products = [
    {
      route: '/category/app-men-detail/1',
      label: 'Mens wear 1',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/2',
      label: 'Mens wear 2',
      image: '/assets/images/men.jpg',
      price: 1500,
    },
    {
      route: '/category/app-men-detail/3',
      label: 'Mens wear 3',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/4',
      label: 'Mens wear 4',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/5',
      label: 'Mens wear 5',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/6',
      label: 'Mens wear 6',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/7',
      label: 'Mens wear 7',
      image: '/assets/images/men.jpg',
      price: 1000,
    },
    {
      route: '/category/app-men-detail/8',
      label: 'Mens wear 8',
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
