import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navratri-detail',
  imports: [CommonModule],
  templateUrl: './navratri-detail.component.html',
  styleUrl: './navratri-detail.component.scss',
})
export class NavratriDetailComponent implements OnInit, OnDestroy {
  imageUrl: string = '';
  productLabel: string = '';
  productId: string | null = null;
  productPrice: number = 0;
  currentUrl: string = '';
  baseUrl: string = 'https://wear-bloom-8f5b5.web.app'; // Adjust based on deployment
  private queryParamsSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    // Subscribe to queryParams and clean up on destroy
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params) => {
        // Use relative path directly for assets
        const imageParam = params['image'];
        this.imageUrl = imageParam
          ? imageParam.startsWith('http')
            ? imageParam
            : `${this.baseUrl}${
                imageParam.startsWith('/') ? '' : '/'
              }${imageParam}`
          : `${this.baseUrl}/assets/images/placeholder.jpg`;

        this.productLabel = params['label'] || 'Product';
        this.productPrice = +params['price'] || 0;

        if (this.productId) {
          this.currentUrl = `${this.baseUrl}/category/app-navratri-detail/${this.productId}`;
        }
      }
    );
  }

  ngOnDestroy() {
    // Clean up subscription to prevent memory leaks
    this.queryParamsSubscription?.unsubscribe();
  }

  generateWhatsAppLink(): string {
    const message = `
      I would like to inquire about:
      - Product: ${this.productLabel}
      - Price: ₹${this.productPrice}
      - Product ID: ${this.productId}
      - Image: ${this.imageUrl}
    `;
    return `https://wa.me/9409074902?text=${encodeURIComponent(
      message.trim()
    )}`;
  }

  generateEmailLink(): string {
    const subject = `Inquiry about ${this.productLabel}`;
    const body = `
      Hello,

      I would like to inquire about:
      - Product: ${this.productLabel}
      - Price: ₹${this.productPrice}
      - Product ID: ${this.productId}
      - Image: ${this.imageUrl}

      Please provide more details.
    `;
    return `mailto:wear.bloom.mail@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body.trim())}`;
  }
}
