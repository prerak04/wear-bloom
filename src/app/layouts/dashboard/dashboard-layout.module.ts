import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Roles } from '../../core/enums/roles';

const routes = [
  {
    path: '',
    data: { roles: [Roles.MasterAdmin, Roles.Admin] },

    loadChildren: () =>
      import('./../../modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'category',
    data: { roles: [Roles.MasterAdmin, Roles.Admin] },

    loadChildren: () =>
      import('../../modules/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class DashboardLayoutModule {}
