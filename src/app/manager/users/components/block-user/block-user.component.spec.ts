import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUserComponent } from './block-user.component';

describe('BlockUserComponent', () => {
  let component: BlockUserComponent;
  let fixture: ComponentFixture<BlockUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockUserComponent]
    });
    fixture = TestBed.createComponent(BlockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
