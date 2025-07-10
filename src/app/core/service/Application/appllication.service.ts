import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Application, ApplicationRoute } from '../../enum/apps';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppllicationService {
  private sideBarState = new BehaviorSubject<Application>(null);
  sideBarState$ = this.sideBarState.asObservable();

  constructor(private _router: Router) {
    this.setStatusControlBasedOnUrl();
  }

  /**
   * Updates the sidebar state by emitting the provided state to the sideBarState subject.
   * @param state The new application state to set for the sidebar.
   */
  changeSidebarState(state: Application) {
    this.sideBarState.next(state);
  }

  /**
   * Sets the status control value based on the current URL segment.
   * Extracts the first segment of the current URL (e.g., 'account', 'project', 'hrms')
   * and updates the statusControl FormControl with the corresponding Application value.
   * Defaults to Application.HRMS if no matching segment is found.
   * Triggers change detection after updating the control.
   */
  setStatusControlBasedOnUrl(): void {
    const currentUrl = this._router.url.toLowerCase();
    const urlSegment = currentUrl.split('/')[1] || '';

    switch (urlSegment) {
      case ApplicationRoute.ACCOUNT:
        this.sideBarState.next(Application.ACCOUNT);
        break;
      case ApplicationRoute.PROJECT:
        this.sideBarState.next(Application.PROJECT);
        break;
      default:
        this.sideBarState.next(Application.HRMS);
        break;
    }
  }
}
