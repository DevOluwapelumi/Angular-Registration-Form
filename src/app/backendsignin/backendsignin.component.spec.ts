import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendsigninComponent } from './backendsignin.component';

describe('BackendsigninComponent', () => {
  let component: BackendsigninComponent;
  let fixture: ComponentFixture<BackendsigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendsigninComponent]
    });
    fixture = TestBed.createComponent(BackendsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
