import { Routes } from '@angular/router';
import { DashboardLayoutContainerComponent } from './layouts/dashboard/dashboard-layout-container/dashboard-layout-container.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/dashboard/dashboard-layout.module').then(
            (m) => m.DashboardLayoutModule
          ),
      },
    ],
  },
];
