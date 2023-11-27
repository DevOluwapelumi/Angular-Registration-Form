import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenddashboardComponent } from './backenddashboard.component';

describe('BackenddashboardComponent', () => {
  let component: BackenddashboardComponent;
  let fixture: ComponentFixture<BackenddashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackenddashboardComponent]
    });
    fixture = TestBed.createComponent(BackenddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
