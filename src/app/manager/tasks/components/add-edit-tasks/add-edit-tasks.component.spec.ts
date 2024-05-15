import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTasksComponent } from './add-edit-tasks.component';

describe('AddEditTasksComponent', () => {
  let component: AddEditTasksComponent;
  let fixture: ComponentFixture<AddEditTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTasksComponent]
    });
    fixture = TestBed.createComponent(AddEditTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
