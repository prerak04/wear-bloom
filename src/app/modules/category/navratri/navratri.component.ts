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
      label: 'Rama Green Choli with embroidery',
      image: 'assets/images/choli-1.jpg',
      price: 1750,
    },
    {
      route: '/category/app-navratri-detail/2',
      label: 'Baby Pink Choli with embroidery',
      image: 'assets/images/choli-2.jpg',
      price: 2150,
    },
    {
      route: '/category/app-navratri-detail/3',
      label: 'White and multi color Choli with embroidery',
      image: 'assets/images/choli-3.jpg',
      price: 2150,
    },
    {
      route: '/category/app-navratri-detail/4',
      label: 'Authentic Red Choli ',
      image: 'assets/images/choli-4.jpg',
      price: 2500,
    },
    {
      route: '/category/app-navratri-detail/5',
      label: 'Elegant Yellow Choli with embroidery',
      image: 'assets/images/choli-5.jpg',
      price: 2150,
    },
    {
      route: '/category/app-navratri-detail/6',
      label: 'Pink Colour Chaniya',
      image: 'assets/images/1150.jpg',
      price: 1150,
    },
    {
      route: '/category/app-navratri-detail/7',
      label: 'Black Chaniya with golden embroidery Border',
      image: 'assets/images/a950.jpg',
      price: 950,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Yellow Chaniya with pattern inside',
      image: 'assets/images/a1000.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/6',
      label: 'Dark Blue Chaniya With Silver embroidery Border and white Blouse',
      image: 'assets/images/a1250.jpg',
      price: 1250,
    },
    {
      route: '/category/app-navratri-detail/7',
      label: 'Yellow Chaniya with pattern inside and designer Blouse',
      image: 'assets/images/a1400.jpg',
      price: 1400,
    },
    {
      route: '/category/app-navratri-detail/8',
      label:
        'Dark Blue Chaniya With Silver embroidery Border  Golden Blouse and Red Dupatta',
      image: 'assets/images/a1500.jpg',
      price: 1500,
    },
    {
      route: '/category/app-navratri-detail/6',
      label: 'White Chaniya with Golden embroidery Border and Black Blouse',
      image: 'assets/images/a1600.jpg',
      price: 1600,
    },
    {
      route: '/category/app-navratri-detail/7',
      label:
        'Pista Green Chaniya With Silver embroidery Border and Designer Blouse',
      image: 'assets/images/a1700.jpg',
      price: 1700,
    },
    {
      route: '/category/app-navratri-detail/8',
      label:
        'White Chaniya with Golden embroidery Border Black Blouse and Black Dupatta',
      image: 'assets/images/a2000.jpg',
      price: 2000,
    },
    {
      route: '/category/app-navratri-detail/6',
      label:
        'Light Purple Chaniye With Designer Blouse and Dark Purple Dupatta',
      image: 'assets/images/a2200.jpg',
      price: 2200,
    },
    {
      route: '/category/app-navratri-detail/7',
      label: 'Rani Pink Chaniya with Golden and Silver embroidery Border',
      image: 'assets/images/b950.jpg',
      price: 950,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Pista Green Chaniya with Golden embroidery Border',
      image: 'assets/images/b1000.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/6',
      label:
        'Black Chaniya with Golden embroidery Border Designer Blouse and White embroidery Dupatta',
      image: 'assets/images/b2000.jpg',
      price: 2000,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Multi Colour Chaniya',
      image: 'assets/images/c950.jpg',
      price: 950,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Blouse 400 Per Piece',
      image: 'assets/images/400-pp.jpg',
      price: 400,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Multi Colour Blouse',
      image: 'assets/images/650.jpg',
      price: 650,
    },
    {
      route: '/category/app-navratri-detail/8',
      label:
        'Rani pink Chaniya With Golden embroidery Border White Blouse and Multi color Dupatta',
      image: 'assets/images/1500.jpg',
      price: 1500,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Light Purple Chaniya with Dark Blue embroidery Blouse',
      image: 'assets/images/1650.jpg',
      price: 1650,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Multi Colour Pair',
      image: 'assets/images/1750.jpg',
      price: 1750,
    },
    {
      route: '/category/app-navratri-detail/8',
      label:
        'Rani pink Chaniya With Golden embroidery Border design and plain Dark Blue Blouse',
      image: 'assets/images/b1200.jpg',
      price: 1200,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Multi Colour Chaniya',
      image: 'assets/images/c1000.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: ' Rani Pink Chaniya with Golden embroidery Border',
      image: 'assets/images/d1000.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Light Purple Chaniya with Golden and Silver embroidery Border',
      image: 'assets/images/e1000.jpg',
      price: 1000,
    },
    {
      route: '/category/app-navratri-detail/8',
      label: 'Black Blouse with embroidery work ',
      image: 'assets/images/550.jpg',
      price: 550,
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
