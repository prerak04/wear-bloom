import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Navigate to category page
  navigateToCategory(category: any) {
    this.router.navigate([category.route]);
  }

  // Navigate to product detail page
  goToProductDetail(product: any) {
    this.router.navigate([product.route, product.id], {
      state: { image: product.image, name: product.name, price: product.price },
    });
  }

  newArrivals = [
    {
      name: 'Oversized Tee',
      price: 899,
      image:
        'assets/images/pngtree-clothes-jacket-clip-art-png-image_5851859.jpg',
    },
    {
      name: 'Summer Dress',
      price: 1499,
      image:
        'assets/images/pngtree-clothing-sweater-clothes-clothing-mens-clothing-spring-clothes-foreign-trade-tailor-png-image_2611494.jpg',
    },
    {
      name: 'Denim Jacket',
      price: 1999,
      image:
        'assets/images/pngtree-original-hand-drawn-cartoon-clothing-green-coat-png-image_4082057.png',
    },
  ];
}
