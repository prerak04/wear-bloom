import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids',
  imports: [CommonModule],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.scss',
})
export class KidsComponent {
  products = [
    {
      route: '/category/app-kids-detail/1',
      label: 'Kids wear 1',
      image: '/assets/images/kid.jpg',
      price: 1000,
    },
    {
      route: '/category/app-kids-detail/2',
      label: 'Kids wear 2',
      image: '/assets/images/kid.jpg',
      price: 1500,
    },
    {
      route: '/category/app-kids-detail/3',
      label: 'Kids wear 3',
      image: '/assets/images/kid.jpg',
      price: 1000,
    },
    {
      route: '/category/app-kids-detail/4',
      label: 'Kids wear 4',
      image: '/assets/images/kid.jpg',
      price: 1000,
    },
    {
      route: '/category/app-kids-detail/5',
      label: 'Kids wear 5',
      image: '/assets/images/kid.jpg',
      price: 1000,
    },
    {
      route: '/category/app-kids-detail/6',
      label: 'Kids wear 6',
      image: '/assets/images/kid.jpg',
      price: 1000,
    },
    {
      route: '/category/app-kids-detail/7',
      label: 'Kids wear 7',
      image: '/assets/images/kid.jpg',
      price: 1000,
    },
    {
      route: '/category/app-kids-detail/8',
      label: 'Kids wear 8',
      image: '/assets/images/kid.jpg',
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
