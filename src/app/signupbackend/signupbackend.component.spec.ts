import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupbackendComponent } from './signupbackend.component';

describe('SignupbackendComponent', () => {
  let component: SignupbackendComponent;
  let fixture: ComponentFixture<SignupbackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupbackendComponent]
    });
    fixture = TestBed.createComponent(SignupbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
