import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '../../core/classes/routes';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./category.component').then((m) => m.CategoryComponent),
    data: {},
  },
  {
    path: Routes.CATEGORY.url,
    loadComponent: () =>
      import('./category.component').then((m) => m.CategoryComponent),
    data: {},
  },
  {
    path: Routes.Men.url,
    loadComponent: () =>
      import('./men/men.component').then((m) => m.MenComponent),
    data: {},
  },
  {
    path: `${Routes.MenDetail.url}/:id`,
    loadComponent: () =>
      import('./men/men-detail/men-detail.component').then(
        (m) => m.MenDetailComponent
      ),
    data: {},
  },
  {
    path: Routes.Women.url,
    loadComponent: () =>
      import('./women/women.component').then((m) => m.WomenComponent),
    data: {},
  },
  {
    path: `${Routes.Women.url}/:id`,
    loadComponent: () =>
      import('./women/women.component').then((m) => m.WomenComponent),
    data: {},
  },
  {
    path: Routes.Kids.url,
    loadComponent: () =>
      import('./kids/kids.component').then((m) => m.KidsComponent),
    data: {},
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CategoryModule {}
