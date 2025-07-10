import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDetailComponent } from './women-detail.component';

describe('WomenDetailComponent', () => {
  let component: WomenDetailComponent;
  let fixture: ComponentFixture<WomenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
