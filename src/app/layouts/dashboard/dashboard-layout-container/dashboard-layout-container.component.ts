import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardLayoutHeaderComponent } from '../dashboard-layout-header/dashboard-layout-header.component';
import { DashboardLayoutSidebarComponent } from '../dashboard-layout-sidebar/dashboard-layout-sidebar.component';

@Component({
  selector: 'app-dashboard-layout-container',
  imports: [
    RouterModule,
    DashboardLayoutHeaderComponent,
    DashboardLayoutSidebarComponent,
  ],
  standalone: true,
  templateUrl: './dashboard-layout-container.component.html',
  styleUrl: './dashboard-layout-container.component.scss',
})
export class DashboardLayoutContainerComponent {
  isSidebarOpen = false;
}
