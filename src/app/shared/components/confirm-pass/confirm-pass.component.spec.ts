import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPassComponent } from './confirm-pass.component';

describe('ConfirmPassComponent', () => {
  let component: ConfirmPassComponent;
  let fixture: ComponentFixture<ConfirmPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmPassComponent]
    });
    fixture = TestBed.createComponent(ConfirmPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
