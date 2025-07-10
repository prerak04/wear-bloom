import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsDetailComponent } from './kids-detail.component';

describe('KidsDetailComponent', () => {
  let component: KidsDetailComponent;
  let fixture: ComponentFixture<KidsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
