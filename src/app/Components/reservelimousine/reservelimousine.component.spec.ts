import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservelimousineComponent } from './reservelimousine.component';

describe('ReservelimousineComponent', () => {
  let component: ReservelimousineComponent;
  let fixture: ComponentFixture<ReservelimousineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservelimousineComponent]
    });
    fixture = TestBed.createComponent(ReservelimousineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
