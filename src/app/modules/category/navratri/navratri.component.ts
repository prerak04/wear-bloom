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
      label: 'Sky Blue Choli with embroidery',
      image: 'assets/images/choli-1.jpg',
      price: 3499,
    },
    {
      route: '/category/app-navratri-detail/2',
      label: 'Baby Pink Choli with embroidery',
      image: 'assets/images/choli-2.jpg',
      price: 3499,
    },
    {
      route: '/category/app-navratri-detail/3',
      label: 'White and multi color Choli with embroidery',
      image: 'assets/images/choli-3.jpg',
      price: 3499,
    },
    {
      route: '/category/app-navratri-detail/4',
      label: 'Authentic Red Choli ',
      image: 'assets/images/choli-4.jpg',
      price: 3499,
    },
    {
      route: '/category/app-navratri-detail/5',
      label: 'Elegant Yellow Choli with embroidery',
      image: 'assets/images/choli-5.jpg',
      price: 3499,
    },
    // {
    //   route: '/category/app-navratri-detail/6',
    //   label: 'Navratri wear 6',
    //   image: 'assets/images/navratri-home.jpg',
    //   price: 1000,
    // },
    // {
    //   route: '/category/app-navratri-detail/7',
    //   label: 'Navratri wear 7',
    //   image: 'assets/images/navratri-home.jpg',
    //   price: 1000,
    // },
    // {
    //   route: '/category/app-navratri-detail/8',
    //   label: 'Navratri wear 8',
    //   image: 'assets/images/navratri-home.jpg',
    //   price: 1000,
    // },
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
