import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenDetailComponent } from './men-detail.component';

describe('MenDetailComponent', () => {
  let component: MenDetailComponent;
  let fixture: ComponentFixture<MenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
