import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHeaderComponent } from './shared-header.component';

describe('SharedHeaderComponent', () => {
  let component: SharedHeaderComponent;
  let fixture: ComponentFixture<SharedHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedHeaderComponent]
    });
    fixture = TestBed.createComponent(SharedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
