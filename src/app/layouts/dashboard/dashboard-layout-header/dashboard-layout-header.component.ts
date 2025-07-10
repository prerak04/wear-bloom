import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../../../core/helper/result';
import { NavigationEnd, Router } from '@angular/router';
import { Menu } from '../dashboard-layout-sidebar/menu';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard-layout-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dashboard-layout-header.component.html',
  styleUrl: './dashboard-layout-header.component.scss',
})
export class DashboardLayoutHeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  public menu = new Menu();
  public activeMenu: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeMenu = event.urlAfterRedirects;
      });
  }

  toggleSubMenu(item: any): void {
    item.isOpen = !item.isOpen;
  }

  onMenuClick(url: string): void {
    this.activeMenu = url;
    this.router.navigate([url]);
  }
}
