/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskBoardService } from './task-board.service';

describe('Service: TaskBoard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskBoardService]
    });
  });

  it('should ...', inject([TaskBoardService], (service: TaskBoardService) => {
    expect(service).toBeTruthy();
  }));
});
