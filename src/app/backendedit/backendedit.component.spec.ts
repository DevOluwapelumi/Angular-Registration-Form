import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendeditComponent } from './backendedit.component';

describe('BackendeditComponent', () => {
  let component: BackendeditComponent;
  let fixture: ComponentFixture<BackendeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendeditComponent]
    });
    fixture = TestBed.createComponent(BackendeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
