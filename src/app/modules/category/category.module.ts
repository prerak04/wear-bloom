import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '../../core/classes/routes';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./category.component').then((m) => m.CategoryComponent),
    data: {},
  },
  {
    path: Routes.HOME.url,
    loadComponent: () =>
      import('./category.component').then((m) => m.CategoryComponent),
    data: {},
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CategoryModule {}
