import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavratriDetailComponent } from './navratri-detail.component';

describe('NavratriDetailComponent', () => {
  let component: NavratriDetailComponent;
  let fixture: ComponentFixture<NavratriDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavratriDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavratriDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
