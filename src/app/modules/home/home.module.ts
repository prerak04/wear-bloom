import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '../../core/classes/routes';

const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    data: {},
  },
  {
    path: Routes.HOME.url,
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    data: {},
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class HomeModule {}
