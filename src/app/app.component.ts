import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardLayoutSidebarComponent } from './layouts/dashboard/dashboard-layout-sidebar/dashboard-layout-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DashboardLayoutSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wear-bloom';
}
