import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninbackendComponent } from './signinbackend.component';

describe('SigninbackendComponent', () => {
  let component: SigninbackendComponent;
  let fixture: ComponentFixture<SigninbackendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninbackendComponent]
    });
    fixture = TestBed.createComponent(SigninbackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
