import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navratri',
  imports: [CommonModule],
  templateUrl: './navratri.component.html',
  styleUrl: './navratri.component.scss',
})
export class NavratriComponent {
  products = [
    {
      route: '/category/app-navratri-detail/1',
      label: 'Navratri wear 1',
      image: 'assets/images/navratri-home.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/2',
      label: 'Navratri wear 2',
      image: 'assets/images/navratri-home.jpg',
      price: 1500,
    },
    {
      route: '/category/app-navratri-detail/3',
      label: 'Navratri wear 3',
      image: 'assets/images/navratri-home.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/4',
      label: 'Navratri wear 4',
      image: 'assets/images/navratri-home.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/5',
      label: 'Navratri wear 5',
      image: 'assets/images/navratri-home.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/6',
      label: 'Navratri wear 6',
      image: 'assets/images/navratri-home.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/7',
      label: 'Navratri wear 7',
      image: 'assets/images/navratri-home.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Navratri wear 8',
      image: 'assets/images/navratri-home.jpg',
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
