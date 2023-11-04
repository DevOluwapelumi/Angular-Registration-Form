import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcashComponent } from './wildcash.component';

describe('WildcashComponent', () => {
  let component: WildcashComponent;
  let fixture: ComponentFixture<WildcashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WildcashComponent]
    });
    fixture = TestBed.createComponent(WildcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
