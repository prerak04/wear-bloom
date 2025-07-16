import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '../../core/classes/routes';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./category.component').then((m) => m.CategoryComponent),
    data: { animation: 'CategoryHomePage' },
  },
  {
    path: Routes.CATEGORY.url,
    loadComponent: () =>
      import('./category.component').then((m) => m.CategoryComponent),
    data: { animation: 'CategoryPage' },
  },
  {
    path: Routes.Men.url,
    loadComponent: () =>
      import('./men/men.component').then((m) => m.MenComponent),
    data: { animation: 'MenPage' },
  },
  {
    path: `${Routes.MenDetail.url}/:id`,
    loadComponent: () =>
      import('./men/men-detail/men-detail.component').then(
        (m) => m.MenDetailComponent
      ),
    data: { animation: 'MenDetailPage' },
  },
  {
    path: Routes.Women.url,
    loadComponent: () =>
      import('./women/women.component').then((m) => m.WomenComponent),
    data: { animation: 'WomenPage' },
  },
  {
    path: `${Routes.WomenDetail.url}/:id`,
    loadComponent: () =>
      import('./women/women-detail/women-detail.component').then(
        (m) => m.WomenDetailComponent
      ),
    data: { animation: 'WomenDetailPage' },
  },
  {
    path: Routes.Kids.url,
    loadComponent: () =>
      import('./kids/kids.component').then((m) => m.KidsComponent),
    data: { animation: 'KidsPage' },
  },
  {
    path: `${Routes.KidsDetail.url}/:id`,
    loadComponent: () =>
      import('./kids/kids-detail/kids-detail.component').then(
        (m) => m.KidsDetailComponent
      ),
    data: { animation: 'KidsDetailPage' },
  },
  {
    path: Routes.Navratri.url,
    loadComponent: () =>
      import('./navratri/navratri.component').then((m) => m.NavratriComponent),
    data: { animation: 'NavratriPage' },
  },
  {
    path: `${Routes.NavratriDetail.url}/:id`,
    loadComponent: () =>
      import('./navratri/navratri-detail/navratri-detail.component').then(
        (m) => m.NavratriDetailComponent
      ),
    data: { animation: 'NavratriDetailPage' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CategoryModule {}
