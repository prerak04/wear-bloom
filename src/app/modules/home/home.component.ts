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
  navigateToCategory(category: string) {
    const routeMap: Record<string, string> = {
      Men: '/category/app-men',
      Women: '/category/app-women',
      Accessories: '/category/app-accessories',
    };

    const targetRoute = routeMap[category];
    if (targetRoute) {
      this.router.navigate([targetRoute]);
    } else {
      console.warn('No route defined for category:', category);
    }
  }

  // Navigate to product detail page
  goToProductDetail(product: any) {
    this.router.navigate([product.route, product.id], {
      state: { image: product.image, name: product.name, price: product.price },
    });
  }

  categories = [
    {
      name: 'Men',
      image: 'assets/images/man-home.png',
    },
    {
      name: 'Women',
      image: 'assets/images/women.jpg',
    },
    {
      name: 'Accessories',
      image: 'assets/images/accessories-banner.jpg',
    },
  ];

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
