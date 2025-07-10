import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLayoutHeaderComponent } from './dashboard-layout-header.component';

describe('DashboardLayoutHeaderComponent', () => {
  let component: DashboardLayoutHeaderComponent;
  let fixture: ComponentFixture<DashboardLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLayoutHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
