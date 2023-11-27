import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenddeleteComponent } from './backenddelete.component';

describe('BackenddeleteComponent', () => {
  let component: BackenddeleteComponent;
  let fixture: ComponentFixture<BackenddeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackenddeleteComponent]
    });
    fixture = TestBed.createComponent(BackenddeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
