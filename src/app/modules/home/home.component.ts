import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
    }, 3000);
  }

  navigateToCategory(category: string) {
    const routeMap: Record<string, string> = {
      // Men: '/category/app-men',
      // Women: '/category/app-women',
      // Kids: '/category/app-kids',
      Navratri: '/category/app-navratri',
    };

    const targetRoute = routeMap[category];
    if (targetRoute) {
      this.router.navigate([targetRoute]);
    } else {
      console.warn('No route defined for category:', category);
    }
  }

  navratriImage = 'assets/images/navratri-home.jpg';

  carouselImages = [
    'assets/images/choli-1.jpg',
    'assets/images/choli-2.jpg',
    'assets/images/choli-3.jpg',
    'assets/images/choli-4.jpg',
    'assets/images/choli-5.jpg',
    'assets/images/1150.jpg',
    'assets/images/a950.jpg',
    'assets/images/a1000.jpg',
    'assets/images/a1250.jpg',
    'assets/images/a1400.jpg',
    'assets/images/a1500.jpg',
    'assets/images/a1600.jpg',
    'assets/images/a1700.jpg',
    'assets/images/a2000.jpg',
    'assets/images/a2200.jpg',
    'assets/images/b950.jpg',
    'assets/images/b1000.jpg',
    'assets/images/b2000.jpg',
    'assets/images/c950.jpg',
    'assets/images/400-pp.jpg',
  ];

  currentSlide = 0;

  goToProductDetail(product: any) {
    this.router.navigate([product.route, product.id], {
      state: { image: product.image, name: product.name, price: product.price },
    });
  }

  categories = [
    // {
    //   name: 'Men',
    //   image: 'assets/images/man-home.png',
    // },
    // {
    //   name: 'Women',
    //   image: 'assets/images/women.jpg',
    // },
    // {
    //   name: 'Kids',
    //   image: 'assets/images/kid.jpg',
    // },
  ];

  newArrivals = [
    {
      name: '',
      image: 'assets/images/choli-3.jpg',
    },
    {
      name: '',
      image: 'assets/images/choli-2.jpg',
    },
    {
      name: '',
      image: 'assets/images/choli-1.jpg',
    },
    {
      name: '',
      image: 'assets/images/choli-4.jpg',
    },
    {
      name: '',
      image: 'assets/images/choli-5.jpg',
    },
    {
      name: '',
      image: 'assets/images/a1700.jpg',
    },
    {
      name: '',
      image: 'assets/images/a2000.jpg',
    },

    {
      name: '',
      image: 'assets/images/b1000.jpg',
    },
    {
      name: '',
      image: 'assets/images/b2000.jpg',
    },
    {
      name: '',
      image: 'assets/images/c950.jpg',
    },
    {
      name: '',
      image: 'assets/images/400-pp.jpg',
    },
    {
      name: '',
      image: 'assets/images/650.jpg',
    },
    {
      name: '',
      image: 'assets/images/1500.jpg',
    },
    {
      name: '',
      image: 'assets/images/1650.jpg',
    },
    {
      name: '',
      image: 'assets/images/1750.jpg',
    },
    {
      name: '',
      image: 'assets/images/b1200.jpg',
    },
    {
      name: '',
      image: 'assets/images/c1000.jpg',
    },
    {
      name: '',
      image: 'assets/images/d1000.jpg',
    },

    {
      name: '',
      image: 'assets/images/550.jpg',
    },
  ];
}
