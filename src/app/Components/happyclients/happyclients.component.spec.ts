import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyclientsComponent } from './happyclients.component';

describe('HappyclientsComponent', () => {
  let component: HappyclientsComponent;
  let fixture: ComponentFixture<HappyclientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyclientsComponent]
    });
    fixture = TestBed.createComponent(HappyclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
