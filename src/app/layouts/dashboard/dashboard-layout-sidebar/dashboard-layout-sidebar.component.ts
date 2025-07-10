import { Component, inject, Input, OnInit } from '@angular/core';
import { Menu } from './menu';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Security } from '../../../core/helper/security';
import { TRole } from '../../../core/enums/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-layout-sidebar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dashboard-layout-sidebar.component.html',
  styleUrl: './dashboard-layout-sidebar.component.scss',
})
export class DashboardLayoutSidebarComponent implements OnInit {
  @Input() isOpen: boolean = false;

  public showSubMenu = false;
  public isAudienceMenuOpen = false;
  public isAudienceSubMenuOpen = false;
  menu = new Menu();
  public activeMenu: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeMenu = event.urlAfterRedirects; // Update activeMenu based on the current route
      });
  }

  toggleSubMenu(item: any): void {
    item.isOpen = !item.isOpen;
  }

  onMenuClick(url: string): void {
    this.activeMenu = url; // Update activeMenu immediately
    this.router.navigate([url]); // Navigate to the route
  }
}
