import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutContainerComponent } from './dashboard-layout-container.component';

describe('DashboardLayoutContainerComponent', () => {
  let component: DashboardLayoutContainerComponent;
  let fixture: ComponentFixture<DashboardLayoutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLayoutContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
